import Image from 'next/image';
import {
	FaGithub as GitHubIcon,
	FaItchIo as ItchIcon,
	FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';
import { FiBarChart as ChartIcon } from 'react-icons/fi';
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi';
import Balancer from 'react-wrap-balancer';

import Button from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { Container } from '@/shared/components/container';
import Heading from '@/shared/components/heading';
import SocialLink from '@/shared/components/social-link';
import profiles from '@/shared/data/profiles.json';
import projects from '@/shared/data/projects.json';
import { border } from '@/shared/lib/styles';
import { titleCase } from '@/shared/lib/utils';

import Contact from './home/component.contact';
import SectionTitle from './home/component.section-title';
import content from './home/content.json';

export default function Home() {
	const iconClasses =
		'h-6 w-6 fill-zinc-500 transition group-hover:fill-emerald-500 dark:fill-zinc-400';

	return (
		<div>
			<Container className="mt-16 sm:mt-32">
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
					<ProjectsSection />
					<aside className="space-y-10 lg:pl-16 xl:pl-24">
						<Resume />
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
function ProjectsSection() {
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
function Resume() {
	return (
		<div className={border}>
			<SectionTitle icon={<ChartIcon className="h-4 w-4" />} title="Skills" />
			<ol className="mt-4 space-y-4">
				{content.skills.map(skill => (
					<li key={skill.name}>
						<div className="-mb-1 text-xs text-zinc-500">
							{titleCase(skill.name)}
						</div>
						<Card.Description>{skill.items.join(', ')}</Card.Description>
					</li>
				))}
			</ol>
			<Button
				href="/"
				// download={filename}
				type="button"
				className="group mt-6 w-full">
				Download CV
				<ChevronDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	);
}
