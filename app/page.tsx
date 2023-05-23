import fs from 'fs';

import Image from 'next/image';
import {
  FaGithub as GitHubIcon,
  FaItchIo as ItchIcon,
  FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';
import { FiBarChart as ChartIcon, FiMail as MailIcon } from 'react-icons/fi';
import Balancer from 'react-wrap-balancer';

import Button from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { Container } from '@/shared/components/container';
import Heading from '@/shared/components/heading';
import SectionTitle from '@/shared/components/section-title';
import SocialLink from '@/shared/components/social-link';
import { border } from '@/shared/lib/styles';
import { titleCase } from '@/shared/lib/utils';
import { Project } from '@/globals';
import DropdownButton from '@/shared/components/dropdown';

type Profiles = {
  github: { link: string; username: string };
  linkedin: { link: string; username: string };
  itch: { link: string; username: string };
};

export default async function Home() {
  const content = await JSON.parse(fs.readFileSync('app/content.json', 'utf8'));
  const profiles: Profiles = await JSON.parse(
    fs.readFileSync('shared/data/profiles.json', 'utf8')
  );
  const iconClasses =
    'h-6 w-6 fill-zinc-500 transition group-hover:fill-emerald-500 dark:fill-zinc-400';

  return (
    <div>
      <Container className="mt-24">
        <main className="flex w-full flex-col-reverse lg:flex-row">
          <aside>
            <section className="max-w-2xl">
              <Heading>{content.heading}</Heading>
              <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-300">
                <Balancer>{content.subheading}</Balancer>
              </p>
            </section>
            <div className="mt-6 flex gap-6">
              <SocialLink href={profiles.github.link} aria="Follow on GitHub">
                <GitHubIcon className={iconClasses} />
              </SocialLink>
              <SocialLink
                href={profiles.linkedin.link}
                aria="Follow on LinkedIn">
                <LinkedInIcon className={iconClasses} />
              </SocialLink>
              <SocialLink
                href={profiles.itch.link}
                aria="Check out my itch.io page">
                <ItchIcon className={iconClasses} />
              </SocialLink>
            </div>
          </aside>
          <div className="max-w-xs px-2.5 pb-16 lg:block lg:max-w-none lg:pb-0">
            <Image
              src={content.splash}
              alt="Person sitting at a desk working on a laptop that has a screen with a code editor open. A second monitor is visible with a browser open to a website."
              width={512}
              height={512}
              className="rounded object-cover"
              priority={true}
            />
          </div>
        </main>
      </Container>
      <Container className="mt-6 p-6 ">
        <div className="mx-auto grid  grid-cols-1 gap-y-20  lg:grid-cols-2">
          {/* @ts-expect-error Async Server Component */}
          <ProjectsSection />
          <aside className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume content={content} />
            <Contact />
          </aside>
        </div>
      </Container>
    </div>
  );
}

/**
 * Section that displays featured projects on the home page.
 */
async function ProjectsSection() {
  const rawData = fs.readFileSync('shared/data/projects.json', 'utf8');
  const projects: Project[] = JSON.parse(rawData);

  const sortedProjects = projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="pt-6">
      <div className="flex flex-col gap-12">
        {sortedProjects.map(project => (
          <Card key={project.name}>
            <Card.Title href={`/projects#${project.name}`}>
              {project.name}
            </Card.Title>
            <Card.Description>{project.blurb}</Card.Description>
            <Card.Cta>See More</Card.Cta>
          </Card>
        ))}
      </div>
    </section>
  );
}

/**
 * Section that displays the skills and a download link for the resume.
 */
function Resume({
  content
}: {
  // not the best way to do this, but it works for now
  content: { skills: { name: string; items: string[] }[] };
}) {
  return (
    <div className={border}>
      <SectionTitle icon={<ChartIcon className="h-4 w-4" />} title="Skills" />
      <ol className="mt-4 space-y-4">
        {content.skills.map(skill => (
          <li key={skill.name}>
            <div className="-mb-1 text-xs text-zinc-500 dark:text-zinc-400">
              {titleCase(skill.name)}
            </div>
            <Card.Description>{skill.items.join(', ')}</Card.Description>
          </li>
        ))}
      </ol>
      <DropdownButton />
    </div>
  );
}

function Contact() {
  return (
    <form
      action="https://formkeep.com/f/555a16ecb7fc"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      method="POST"
      className={` ${border}`}>
      <SectionTitle
        icon={<MailIcon className="h-4 w-4" />}
        title="Contact Me"
      />
      <div className="grid grid-cols-4 gap-6 pt-6">
        <textarea
          required
          name="message"
          placeholder="Message"
          aria-label="Message"
          cols={30}
          rows={4}
          className="col-span-4 appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)]  shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"></textarea>
        <div className="col-span-4 flex gap-6">
          <input
            type="name"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
            className="min-w-0 flex-auto appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)]  shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            className="min-w-0 flex-auto appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)]  shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
          />
        </div>
        <Button type="submit" className="col-span-1">
          Send
        </Button>
      </div>
    </form>
  );
}
