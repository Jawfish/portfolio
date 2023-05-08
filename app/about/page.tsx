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
import profiles from '@/shared/data/profiles.json';

import content from './content.json';
import Excerpt from './excerpt';

export default function About() {
  return (
    <Container className="mt-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={content.splash}
              alt="Person wearing headphones typing on a desktop computer with git commit activity in the background."
              width={512}
              height={512}
              className="rounded object-cover"
              priority={true}
            />
          </div>
        </div>
        <section className="lg:order-first lg:row-span-2">
          <Heading>{content.heading}</Heading>
          <article className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            <Excerpt />
          </article>
        </section>
        <aside className="lg:pl-20">
          <ul>
            <SocialLink href={profiles.github.link} aria="GitHub profile">
              <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
              <span>Explore my GitHub</span>
            </SocialLink>
            <SocialLink href={profiles.linkedin.link} aria="LinkedIn profile">
              <LinkedInIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
              <span>Follow on LinkedIn</span>
            </SocialLink>
            <SocialLink href={profiles.itch.link} aria="Itch.io profile">
              <ItchIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
              <span>Check out my Itch.io</span>
            </SocialLink>
            <SocialLink href="mailto:james@jawfish.dev" aria="Email me">
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
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
        className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500">
        {children}
      </Link>
    </li>
  );
}
