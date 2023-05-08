import './globals.css';

import localFont from 'next/font/local';
import Link from 'next/link';
import { Metadata } from 'next';

import {
  Container,
  InnerContainer,
  OuterContainer
} from '@/shared/components/container';
import NavItem from '@/shared/components/nav-item';

import Provider from './theme-provider';

const font = localFont({
  src: '../public/fonts/atkinson.ttf',
  variable: '--font-atkinson'
});

export const metadata: Metadata = {
  title: 'James Fitzgerald - Full Stack Web Developer',
  description:
    'James is a versatile full stack web developer specializing in JavaScript, TypeScript, Python, React, Next.js, and more.',
  keywords: [
    'James Fitzgerald',
    'full stack',
    'web developer',
    'javascript',
    'typescript',
    'python',
    'react',
    'next.js',
    'backend',
    'frontend'
  ],
  openGraph: {
    type: 'website',
    siteName: 'James Fitzgerald',
    title: 'James Fitzgerald - Full Stack Web Developer',
    description:
      'James is a versatile full stack web developer specializing in JavaScript, TypeScript, Python, React, Next.js, and more.',
    emails: ['james@jawfish.dev'],
    url: 'https://jawfish.dev'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${font.variable}`}>
      <head />
      <body className="bg-zinc-50 font-atkinson dark:bg-black">
        <Provider>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <header
            className="pointer-events-none relative z-40 flex flex-col"
            style={{
              height: 'var(--header-height)',
              marginBottom: 'var(--header-)'
            }}>
            <div className="top-0 z-10 h-16 pt-6">
              <Container className="top-[var(--header-top,theme(spacing.6))] w-full">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <nav className="flex flex-1 justify-end md:justify-center">
                    <div className="pointer-events-auto md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                        <NavItem href="/projects">Projects</NavItem>
                      </ul>
                    </div>
                  </nav>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      {/* <ThemeToggle /> */}
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </header>
          {children}
          <footer className="mt-32">
            <OuterContainer>
              <InnerContainer>
                <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <Link
                      href="/"
                      className="transition hover:text-emerald-500 dark:hover:text-emerald-500">
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="transition hover:text-emerald-500 dark:hover:text-emerald-500">
                      About
                    </Link>
                    <Link
                      href="/projects"
                      className="transition hover:text-emerald-500 dark:hover:text-emerald-500">
                      Projects
                    </Link>
                  </div>
                  <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} James Fitzgerald. All
                    rights reserved.
                  </p>
                </div>
              </InnerContainer>
            </OuterContainer>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
