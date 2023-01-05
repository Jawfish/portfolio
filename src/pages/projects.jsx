import Image from 'next/image';
import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';
import { endpoint } from '@/lib/client';
import {
	FaGamepad as GameIcon,
	FaWrench as UtilityIcon,
	FaGlobe as WebsiteIcon
} from 'react-icons/fa';
import { Card } from '@/components/Card';
import Link from 'next/link';
import { BiLinkExternal as LinkIcon } from 'react-icons/bi';

function TechTags({ tags }) {
	return (
		<div className="flex gap-2">
			{tags.map(tag => (
				<span
					key={tag.id}
					className="text-xs text-zinc-400  transition-all  dark:text-zinc-500">
					{tag.name}
				</span>
			))}
		</div>
	);
}

function Project({ project }) {
	return (
		<div className=" rounded-mg h-fit rounded-md  border border-zinc-100 bg-white   dark:border-0 dark:border-zinc-700/40 dark:bg-zinc-800 lg:max-w-md">
			<div className="">
				<Image
					className="rounded-t-md border-t border-l border-r border-zinc-100 dark:border-zinc-700/40"
					src={project.image}
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
				<Card.Title>{project.name}</Card.Title>
				<TechTags tags={project.stack} />
				<Card.Description>{project.description}</Card.Description>
				<div className="group-hover:text-teal-1000 flex relative z-10 mt-auto w-full gap-4 pt-2 text-sm font-medium text-zinc-400 transition-all dark:text-zinc-200">
					{project.link && (
						<Link href={project.link} className="flex group items-end">
							<span className="inline-flex items-center gap-1 text-xs font-normal transition-all hover:text-emerald-500">
								{project.cta}
								<LinkIcon className="mt-0.5" />
							</span>
						</Link>
					)}
					{project.github && (
						<Link href={project.github} className="flex items-end">
							<span className="inline-flex items-center gap-1 text-xs font-normal transition-all hover:text-emerald-500">
								View Source
							</span>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
	// return (
	// 	<div as="li" key={project.id} className="">
	// 		<div className="xs:h-64 flex h-auto justify-between gap-6">
	// 			<div className="hidden w-80 rounded-l-md md:block">
	// 				<Image
	// 					src={project.image}
	// 					alt=""
	// 					width={256}
	// 					height={256}
	// 					className="h-full w-full rounded-md border-r border-zinc-100 object-cover dark:border-zinc-700/40 dark:brightness-90"
	// 				/>
	// 			</div>
	// 			<div className="flex w-full flex-col">
	// 				<Card.Title>{project.name}</Card.Title>
	// 				<TechTags tags={project.stack} />
	// 				<Card.Description>{project.description}</Card.Description>
	// 				<div className="mt-auto flex w-full items-center justify-between">
	// 					<div className="group-hover:text-teal-1000 relative z-10 mt-auto flex w-full gap-4 text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
	// 						{project.link && (
	// 							<Link href={project.link} className="group flex items-end">
	// 								<span className="flex items-center gap-1 text-xs font-normal transition-all hover:text-emerald-500">
	// 									<WebsiteIcon />
	// 									Visit Site
	// 								</span>
	// 							</Link>
	// 						)}
	// 						{project.github && (
	// 							<Link href={project.github} className="flex items-end">
	// 								<span className="flex items-center gap-1 text-xs font-normal transition-all hover:text-emerald-500">
	// 									<GitHubIcon />
	// 									View Source
	// 								</span>
	// 							</Link>
	// 						)}
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
}

function ProjectsSection({ items, icon, title }) {
	return (
		<div>
			<h2 className="flex mt-16 mb-8 text-2xl text-zinc-900 dark:text-zinc-100">
				{icon}
				<span className="ml-3">{title}</span>
			</h2>
			<ul
				role="list"
				className="grid grid-cols-1  lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
				{items.map((project, i) => (
					<Project key={i} project={project} />
				))}
			</ul>
		</div>
	);
}

export default function Projects({ projects }) {
	projects.reverse();
	return (
		<>
			<Head>
				<title>Projects - James Fitzgerald</title>
				<meta name="description" content="Things I’ve made." />
			</Head>
			<SimpleLayout
				title="Some of the things I've made."
				intro="I have a range of personal projects I've worked on, including websites, games, and utilities, most of which are open-source and available on my GitHub. Take a look at the code to see how I tackle projects, and feel free to check out the rest of my GitHub profile.">
				<ProjectsSection
					items={projects.filter(project => project.category === 'website')}
					icon={
						<WebsiteIcon className="inline-flex h-8 w-8 self-center text-zinc-900 dark:text-zinc-100" />
					}
					title="Websites"
				/>
				<ProjectsSection
					items={projects.filter(project => project.category === 'game')}
					icon={
						<GameIcon className="inline-flex h-8 w-8 self-center text-zinc-900 dark:text-zinc-100" />
					}
					title="Games"
				/>
				<ProjectsSection
					items={projects.filter(project => project.category === 'utility')}
					icon={
						<UtilityIcon className="h-8 w-8 flex-none text-zinc-900 dark:text-zinc-100" />
					}
					title="Utilities"
				/>
			</SimpleLayout>
		</>
	);
}

export async function getStaticProps() {
	const query = `query {
    Projects {
      docs {
        id
        name
        category
		blurb
        description
        link
        github
		cta
        stack {
          id
          name
        }
        image
      }
    }
  }
  `;
	const projects = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query
		})
	})
		.then(res => res.json())
		.then(res => res.data.Projects.docs);
	return {
		props: {
			projects
		}
	};
}
