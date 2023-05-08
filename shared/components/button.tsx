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
    'inline-flex items-center justify-center gap-2 rounded bg-zinc-800 px-3 py-2 text-sm font-semibold tracking-wide text-zinc-50 outline-offset-2 transition hover:bg-zinc-600 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:text-zinc-50 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
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
