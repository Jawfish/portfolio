'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	const isActive = pathName === href;

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
