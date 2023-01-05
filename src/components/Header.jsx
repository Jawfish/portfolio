import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { VscClose } from 'react-icons/vsc';
import { FaChevronDown } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { Fragment, useEffect, useRef } from 'react';

function MobileNavItem({ href, children }) {
	return (
		<li>
			<Popover.Button as={Link} href={href} className="block py-2">
				{children}
			</Popover.Button>
		</li>
	);
}

function MobileNavigation(props) {
	return (
		<Popover {...props}>
			<Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
				Menu
				<FaChevronDown className="ml-3 mt-1 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
			</Popover.Button>
			<Transition.Root>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95">
					<Popover.Panel
						focus
						className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
						<div className="flex flex-row-reverse items-center justify-between">
							<Popover.Button aria-label="Close menu" className="-m-1 p-1">
								<VscClose className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
							</Popover.Button>
							<h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
								Navigation
							</h2>
						</div>
						<nav className="mt-6">
							<ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
								<MobileNavItem href="/">Home</MobileNavItem>
								<MobileNavItem href="/about">About</MobileNavItem>
								<MobileNavItem href="/blog">Blog</MobileNavItem>
								<MobileNavItem href="/projects">Projects</MobileNavItem>
							</ul>
						</nav>
					</Popover.Panel>
				</Transition.Child>
			</Transition.Root>
		</Popover>
	);
}

function NavItem({ href, children }) {
	const isActive = useRouter().pathname === href;

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					'relative block px-3 py-2 transition',
					isActive
						? 'text-emerald-500 dark:text-emerald-400'
						: 'hover:text-emerald-500 dark:hover:text-emerald-400'
				)}>
				{children}
				{isActive && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 dark:from-emerald-400/0 dark:via-emerald-400/40 dark:to-emerald-400/0" />
				)}
			</Link>
		</li>
	);
}

function DesktopNavigation(props) {
	return (
		<nav {...props}>
			<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/blog">Blog</NavItem>
				<NavItem href="/projects">Projects</NavItem>
			</ul>
		</nav>
	);
}

function ModeToggle() {
	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:!transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:!transition-none');
		}, 0);
	}

	function toggleMode() {
		disableTransitionsTemporarily();

		const darkModeMediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);
		const isSystemDarkMode = darkModeMediaQuery.matches;
		const isDarkMode = document.documentElement.classList.toggle('dark');

		if (isDarkMode === isSystemDarkMode) {
			delete window.localStorage.isDarkMode;
		} else {
			window.localStorage.isDarkMode = isDarkMode;
		}
	}

	return (
		<button
			type="button"
			aria-label="Toggle dark mode"
			className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
			onClick={toggleMode}>
			<FiSun className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-emerald-50 [@media(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-emerald-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600" />
			<FiMoon className="hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-emerald-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-emerald-500" />
		</button>
	);
}

function clamp(number, a, b) {
	const min = Math.min(a, b);
	const max = Math.max(a, b);
	return Math.min(Math.max(number, min), max);
}

export function Header() {
	const headerRef = useRef();
	const avatarRef = useRef();
	const isInitial = useRef(true);

	useEffect(() => {
		const downDelay = avatarRef.current?.offsetTop ?? 0;
		const upDelay = 64;

		function setProperty(property, value) {
			document.documentElement.style.setProperty(property, value);
		}

		function removeProperty(property) {
			document.documentElement.style.removeProperty(property);
		}

		function updateHeaderStyles() {
			const { top, height } = headerRef.current.getBoundingClientRect();
			const scrollY = clamp(
				window.scrollY,
				0,
				document.body.scrollHeight - window.innerHeight
			);

			if (isInitial.current) {
				setProperty('--header-position', 'sticky');
			}

			setProperty('--content-offset', `${downDelay}px`);

			if (isInitial.current || scrollY < downDelay) {
				setProperty('--header-height', `${downDelay + height}px`);
				setProperty('--header-mb', `${-downDelay}px`);
			} else if (top + height < -upDelay) {
				const offset = Math.max(height, scrollY - upDelay);
				setProperty('--header-height', `${offset}px`);
				setProperty('--header-mb', `${height - offset}px`);
			} else if (top === 0) {
				setProperty('--header-height', `${scrollY + height}px`);
				setProperty('--header-mb', `${-scrollY}px`);
			}

			if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
				setProperty('--header-inner-position', 'fixed');
				removeProperty('--header-top');
				removeProperty('--avatar-top');
			} else {
				removeProperty('--header-inner-position');
				setProperty('--header-top', '0px');
				setProperty('--avatar-top', '0px');
			}
		}

		function updateStyles() {
			updateHeaderStyles();
			isInitial.current = false;
		}

		updateStyles();
		window.addEventListener('scroll', updateStyles, { passive: true });
		window.addEventListener('resize', updateStyles);

		return () => {
			window.removeEventListener('scroll', updateStyles, { passive: true });
			window.removeEventListener('resize', updateStyles);
		};
	});

	return (
		<>
			<header
				className="pointer-events-none relative z-50 flex flex-col"
				style={{
					height: 'var(--header-height)',
					marginBottom: 'var(--header-mb)'
				}}>
				<div
					ref={headerRef}
					className="top-0 z-10 h-16 pt-6"
					style={{ position: 'var(--header-position)' }}>
					<Container
						className="top-[var(--header-top,theme(spacing.6))] w-full"
						style={{ position: 'var(--header-inner-position)' }}>
						<div className="relative flex gap-4">
							<div className="flex flex-1"></div>
							<div className="flex flex-1 justify-end md:justify-center">
								<MobileNavigation className="pointer-events-auto md:hidden" />
								<DesktopNavigation className="pointer-events-auto hidden md:block" />
							</div>
							<div className="flex justify-end md:flex-1">
								<div className="pointer-events-auto">
									<ModeToggle />
								</div>
							</div>
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}
