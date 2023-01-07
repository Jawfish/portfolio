import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Meta } from '@/components/Meta';
import { Container } from '@/components/Container';
import serialize from '@/lib/serialize';

import { endpoint, revalidationSeconds } from '@/lib/client';

import {
	FaEnvelope as MailIcon,
	FaItchIo as ItchIcon,
	FaGithub as GitHubIcon,
	FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				target="_blank"
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

export default function About({ page, profile }) {
	return (
		<>
			<Meta page={page} />
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={page.splash.url}
								alt=""
								width={512}
								height={512}
								className="rounded-md object-cover"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							{page.heading}
						</h1>
						<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							{serialize(page.content)}
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							<SocialLink
								href={profile.github}
								icon={GitHubIcon}
								className="mt-4">
								Explore my GitHub
							</SocialLink>
							<SocialLink
								href={profile.linkedin}
								icon={LinkedInIcon}
								className="mt-4">
								Follow on LinkedIn
							</SocialLink>
							<SocialLink href={profile.itch} icon={ItchIcon} className="mt-4">
								Check out my Itch.io
							</SocialLink>
							<SocialLink
								href="mailto:james@jawfish.dev"
								icon={MailIcon}
								className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
								james@jawfish.dev
							</SocialLink>
						</ul>
					</div>
				</div>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const query = `query {
		Page(id: "63b47dad5f65e8d5f4f7b758") {
		  heading
		  content
		  head {
			title
			meta {
			  description
			  keywords
			  author
			}
			og {
			  title
			  description
			  image {
				url
			  }
			}
		  }
		  splash {
			url
		  }
		}
		Profile(id: "63b9d30f14a9f9fb9928ce9d") {
			github
			linkedin
			itch
		}
	  }
	  `;
	const content = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query
		})
	})
		.then(res => res.json())
		.then(res => res.data);

	return {
		props: {
			page: content.Page,
			profile: content.Profile
		},
		revalidate: revalidationSeconds
	};
}
