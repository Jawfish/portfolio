'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

/**
 * Toggles between light and dark mode.
 * TODO: Render button on server, handle logic on client.
 * Currently, the button pops in after the client-side JS loads.
 */
export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	function toggleMode() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<button
			type="button"
			aria-label="Toggle dark mode"
			onClick={toggleMode}
			className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
			<FiSun className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-emerald-50 [@media(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-emerald-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600" />
			<FiMoon className="hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-emerald-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-emerald-500" />
		</button>
	);
}
