import localFont from 'next/font/local';

const bold = localFont({
  src: '../../public/fonts/atkinson-bold.ttf',
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
