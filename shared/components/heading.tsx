import { Lato } from 'next/font/google';

const font = Lato({
  variable: '--font-lato-black',
  weight: '900',
  subsets: ['latin']
});

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`font-heading text-5xl font-black tracking-tight text-zinc-800 dark:text-zinc-50 ${font.variable}`}>
      {children}
    </h1>
  );
}
