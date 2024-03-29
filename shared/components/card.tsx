import clsx from 'clsx';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

interface CardProps {
  as?: 'div' | 'a' | 'button' | 'li' | 'p' | 'span' | 'h2' | 'time';
  className?: string;
  children: React.ReactNode;
}

export function Card({
  as: Component = 'div',
  className,
  children
}: CardProps) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  );
}

interface CardLinkProps extends CardProps {
  href: string;
}

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <div>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded" />
        <span className="relative z-30">{children}</span>
      </Link>
    </div>
  );
};

interface CardTitleProps extends CardProps {
  href?: string;
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children
}: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-wide text-zinc-800 dark:text-zinc-50">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-300">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400">
      {children}
      <HiChevronRight className="ml-1 mt-1 h-4 w-4 stroke-current" />
    </div>
  );
};

interface CardEyebrowProps extends CardProps {
  decorate?: boolean;
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}>
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
