import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { Project } from '@/globals';
import { Card } from '@/shared/components/card';

import WatchDemo from './watch-demo';

export default function ProjectCard({
  project,
  showModal,
  hidden = false
}: {
  project: Project;
  showModal: (project: Project) => void;
  hidden: boolean;
}) {
  return (
    <div
      id={project.name}
      className={`h-fit rounded border border-zinc-100 dark:border-zinc-700/40 lg:max-w-md ${
        hidden ? 'hidden' : ''
      }`}>
      <div className="relative">
        <Image
          className="rounded-t border-b border-zinc-100 dark:border-zinc-700/40"
          src={project.image || ''}
          alt={project.name}
          width={256}
          height={256}
          style={{
            objectFit: 'cover',
            objectPosition: '0% 0%',
            width: '100%',
            height: '50%'
          }}
        />
      </div>
      <div className="p-5">
        {/* <TechTags tags={project.stack} /> */}
        <Card.Title>{project.name}</Card.Title>
        <Card.Description>{project.description}</Card.Description>
        <div className="relative z-10 mt-auto flex w-full gap-4 pt-3  text-sm font-medium text-zinc-400 transition-all group-hover:text-emerald-100 dark:text-zinc-200">
          {project.link && (
            <Link
              href={project.link}
              passHref={true}
              target="_blank"
              className="group flex items-end">
              <span className="inline-flex items-center gap-1 text-sm font-normal text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400">
                {project.cta}
                <BiLinkExternal className="mt-0.5" />
              </span>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              passHref={true}
              target="_blank"
              className="flex items-end">
              <span className="inline-flex items-center gap-1 text-sm font-normal text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400">
                Source
              </span>
            </Link>
          )}
          {project.recording && (
            <WatchDemo showModal={showModal} project={project} />
          )}
        </div>
      </div>
    </div>
  );
}
