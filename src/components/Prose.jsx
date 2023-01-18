import clsx from 'clsx';

export function Prose({ children, className }) {
	return (
		<article className={clsx(className, 'prose dark:prose-invert')}>
			{children}
		</article>
	);
}
