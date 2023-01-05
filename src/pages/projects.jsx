import Image from 'next/image';
import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';
import { endpoint } from '@/lib/client';
import Link from 'next/link';

function WebsiteIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
			<line x1="3" y1="9" x2="21" y2="9"></line>
			<line x1="9" y1="21" x2="9" y2="9"></line>
		</svg>
	);
}

function UtilityIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
		</svg>
	);
}

function GameIcon(props) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<path d="M20.333 3c0 2.25-1.666 4.5-3.889 4.5C14.222 7.5 12 8.625 12 9.75v1.125m-5.556 6.75v-1.688m0 0V14.25m0 1.688H4.778m1.666 0h1.667M7 21c-2.761 0-5-2.267-5-5.063 0-2.795 2.239-5.062 5-5.062h10c2.761 0 5 2.267 5 5.063C22 18.733 19.761 21 17 21c0 0-2.778 0-4.158-2.25h-1.684C9.778 21 7 21 7 21z" />
			<line x1="15.89" y1="15.94" x2="15.89" y2="15.94" />
			<line x1="19.22" y1="15.94" x2="19.22" y2="15.94" />
			<line x1="17.56" y1="14.25" x2="17.56" y2="14.25" />
			<line x1="17.56" y1="17.63" x2="17.56" y2="17.63" />
		</svg>
	);
}

function LinkIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="inline-flex h-4 w-4 self-center"
			{...props}>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
			<polyline points="15 3 21 3 21 9"></polyline>
			<line x1="10" y1="14" x2="21" y2="3"></line>
		</svg>
	);
}

function GitHubIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="inline-flex h-4 w-4 self-center"
			{...props}>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
		</svg>
	);
}

function TechTags({ tags }) {
	return (
		<div className="flex gap-2">
			{tags.map(tag => (
				<span
					key={tag.id}
					className="text-xs text-zinc-400  transition-all  dark:text-zinc-600">
					{tag.name}
				</span>
			))}
		</div>
	);
}

function Project({ project }) {
	return (
		<div as="li" key={project.id} className="">
			<div className="xs:h-64 flex h-auto justify-between gap-6">
				<div className="hidden w-80 rounded-l-md md:block">
					<Image
						src={project.image}
						alt=""
						width={256}
						height={256}
						className="h-full w-full rounded-md border-r border-zinc-100 object-cover dark:border-zinc-700/40 dark:brightness-90"
					/>
				</div>
				<div className="flex w-full flex-col">
					<h2 className="pb-1 font-medium text-zinc-800 transition-all dark:text-zinc-200 dark:group-hover:text-white">
						{project.name}
					</h2>
					<TechTags tags={project.stack} />
					<div className="py-1 text-base text-zinc-600 transition-all dark:text-zinc-400 dark:group-hover:text-zinc-300">
						{project.description}
					</div>
					<div className="mt-auto flex w-full items-center justify-between">
						<div className="group-hover:text-teal-1000 relative z-10 mt-auto flex gap-4 text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
							{project.link && (
								<Link
									href={project.link}
									className="flex gap-1 text-xs font-normal transition-all hover:text-emerald-500">
									<LinkIcon />
									Visit Site
								</Link>
							)}
							{project.github && (
								<Link
									href={project.github}
									className="flex gap-1 text-xs font-normal transition-all hover:text-emerald-500">
									<GitHubIcon /> View Source
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProjectsSection({ items, icon, title }) {
	return (
		<div>
			<h2 className="mt-16 mb-8 flex text-2xl text-zinc-900 dark:text-zinc-100">
				{icon}
				<span className="ml-3">{title}</span>
			</h2>
			<ul role="list" className="grid grid-cols-1 gap-12">
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
        description
        link
        github
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
