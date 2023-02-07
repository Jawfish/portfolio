import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { Card } from '@/shared/components/card';
import { Project } from '@/globals';

import WatchDemo from './component.watch-demo';

export default function ProjectCard({
	project,
	showModal
}: {
	project: Project;
	showModal: (project: Project) => void;
}) {
	return (
		<div
			id={project.name}
			className="-z-10 h-fit rounded  border border-zinc-100 dark:border-zinc-700/40  lg:max-w-md">
			<div className="relative">
				<Image
					className="rounded-t-md border-b border-zinc-100 dark:border-zinc-700/40"
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
				<div className="group-hover:text-emerald-1000 relative z-10 mt-auto flex w-full gap-4  pt-3 text-sm font-medium text-zinc-400 transition-all dark:text-zinc-200">
					{project.link && (
						<Link
							href={project.link}
							passHref={true}
							target="_blank"
							className="group flex items-end">
							<span className="inline-flex items-center gap-1 text-sm font-normal text-emerald-500 transition-all hover:text-emerald-300">
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
							<span className="inline-flex items-center gap-1 text-sm font-normal text-emerald-500 transition-all hover:text-emerald-300">
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
