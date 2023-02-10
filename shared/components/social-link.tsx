import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
  aria: string;
};

export default function SocialLink({ children, aria, href }: Props) {
  return (
    <Link
      href={href}
      className="group -m-1 p-1"
      aria-label={aria}
      target="_blank">
      {children}
    </Link>
  );
}
