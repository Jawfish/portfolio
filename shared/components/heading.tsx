import { Atkinson_Hyperlegible } from 'next/font/google';

const bold = Atkinson_Hyperlegible({
  weight: '700',
  subsets: ['latin'],
  fallback: ['system-ui', 'arial', 'sans-serif'],
  variable: '--font-atkinson-bold'
});

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`font-atkinson-bold text-3xl tracking-tight text-zinc-800 dark:text-zinc-50 sm:text-5xl ${bold.variable}`}>
      {children}
    </h1>
  );
}
