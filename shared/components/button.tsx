import clsx from 'clsx';
import Link from 'next/link';

type Props = {
	type: 'button' | 'submit';
	className?: string;
	href?: string;
	children: React.ReactNode;
};

export default function Button({ className, href, children }: Props) {
	className = clsx(
		'inline-flex items-center justify-center gap-2 rounded border-b-2 border-emerald-400 bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-50 outline-offset-2 transition hover:bg-emerald-400 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:text-zinc-50 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
		className
	);

	return href ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button className={className}>{children}</button>
	);
}
