import fs from 'fs';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelope as MailIcon,
  FaGithub as GitHubIcon,
  FaItchIo as ItchIcon,
  FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';

import { Container } from '@/shared/components/container';
import Heading from '@/shared/components/heading';

import Excerpt from './excerpt';

type Profiles = {
  github: { link: string; username: string };
  linkedin: { link: string; username: string };
  itch: { link: string; username: string };
};

export default async function About() {
  const profiles: Profiles = await JSON.parse(
    fs.readFileSync('shared/data/profiles.json', 'utf8')
  );

  return (
    <Container className="mt-12 lg:mt-24">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/splash_about.png"
              alt="Person wearing headphones typing on a desktop computer with git commit activity in the background."
              width={512}
              height={512}
              className="h-32 w-32 rounded object-cover sm:h-full sm:w-full"
              priority={true}
            />
          </div>
        </div>
        <section className="lg:order-first lg:row-span-2">
          <Heading>
            {"I'm James, a full-stack developer from Georgia."}
          </Heading>
          <article className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            <Excerpt />
          </article>
        </section>
        <aside className="lg:pl-20">
          <ul>
            <SocialLink href={profiles.github.link} aria="GitHub profile">
              <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
              <span>Explore my GitHub</span>
            </SocialLink>
            <SocialLink href={profiles.linkedin.link} aria="LinkedIn profile">
              <LinkedInIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
              <span>Follow on LinkedIn</span>
            </SocialLink>
            <SocialLink href={profiles.itch.link} aria="Itch.io profile">
              <ItchIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
              <span>Check out my Itch.io</span>
            </SocialLink>
            <SocialLink href="mailto:james@jawfish.dev" aria="Email me">
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
              <span>Email me</span>
            </SocialLink>
          </ul>
        </aside>
      </div>
    </Container>
  );
}

function SocialLink({
  aria,
  href,
  children
}: {
  aria: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mt-4">
      <Link
        href={href}
        aria-label={aria}
        target="_blank"
        className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-400">
        {children}
      </Link>
    </li>
  );
}
