import {
	FaItchIo as ItchIcon,
	FaGithub as GitHubIcon,
	FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';
import Image from 'next/image';

import SocialLink from '@/shared/components/social-link';
import profiles from '@/shared/data/profiles.json';
import { Container } from '@/shared/components/container';
import Heading from '@/shared/components/heading';

import content from './home/content.json';
import ProjectsSection from './home/component.projects-section';
import Resume from './home/component.resume';
import Contact from './home/component.contact';

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
								{content.subheading}
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
