import clsx from 'clsx';

type OuterContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function OuterContainer({ className, children }: OuterContainerProps) {
  return (
    <div className={clsx('sm:px-8', className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

type InnerContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function InnerContainer(
  { className, children, ...props }: InnerContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <OuterContainer className={className}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}
