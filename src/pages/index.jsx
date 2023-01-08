import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { endpoint, revalidationSeconds } from '@/lib/client';
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi';
import {
	FaItchIo as ItchIcon,
	FaGithub as GitHubIcon,
	FaLinkedinIn as LinkedInIcon
} from 'react-icons/fa';
import { FiBarChart as ChartIcon, FiMail as MailIcon } from 'react-icons/fi';
import { Card } from '@/components/Card';
import Image from 'next/image';
import { Meta } from '@/components/Meta';

const border = 'p-6 border rounded-md border-zinc-100 dark:border-zinc-700/40';

function Project({ project }) {
	return (
		<Card>
			<Card.Eyebrow decorate>Featured Project</Card.Eyebrow>
			<Card.Title href={`/projects#${project.name}`}>{project.name}</Card.Title>
			<Card.Description>{project.blurb}</Card.Description>
			<Card.Cta>See More</Card.Cta>
		</Card>
	);
}

function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link className="group -m-1 p-1" {...props} target="_blank">
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	);
}

function SectionTitle({ icon, title }) {
	return (
		<h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
			<span className="">{icon}</span>
			{title}
		</h2>
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
					cols="30"
					rows="4"
					className="col-span-4 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"></textarea>
				<div className="col-span-4 flex gap-6">
					<input
						type="name"
						name="name"
						placeholder="Name"
						aria-label="Name"
						required
						className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="Email address"
						aria-label="Email address"
						className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
					/>
				</div>
				<Button type="submit" variant="primary" className="col-span-1">
					Send
				</Button>
			</div>
		</form>
	);
}

function ProjectsSection({ projects }) {
	projects = projects
		.filter(project => project.featured)
		.sort((a, b) => a.priority - b.priority);
	return (
		<div className="pt-6">
			<div className="flex flex-col gap-12">
				{projects.map(project => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

function Resume({ skills, download }) {
	const filename = download.split('/').pop();
	skills = skills.sort((a, b) => a.priority - b.priority);
	return (
		<div className={border}>
			<SectionTitle icon={<ChartIcon className="h-4 w-4" />} title="Skills" />
			<ol className="mt-4 space-y-4">
				{skills.map(skill => (
					<li key={skill.id}>
						<div className="-mb-2 text-sm text-zinc-400 dark:text-zinc-500">
							{skill.name}
						</div>
						<Card.Description>{skill.technologies}</Card.Description>
					</li>
				))}
			</ol>
			<Button
				href={download}
				download={filename}
				variant="secondary"
				className="group mt-6 w-full">
				Download CV
				<ChevronDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	);
}

export default function Home({ page, projects, skills, resume, profile }) {
	return (
		<>
			<Meta page={page} />
			<Container className="mt-16 sm:mt-32">
				<div className="flex w-full flex-col-reverse lg:flex-row">
					<div>
						<div className="max-w-2xl">
							<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
								{page.heading}
							</h1>
							<p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
								{page.subheading}
							</p>
						</div>
						<div className="mt-6 flex gap-6">
							<SocialLink
								href={profile.github}
								aria-label="Follow on GitHub"
								icon={GitHubIcon}
							/>
							<SocialLink
								href={profile.linkedin}
								aria-label="Follow on LinkedIn"
								icon={LinkedInIcon}
							/>
							<SocialLink
								href={profile.itch}
								aria-label="Check out my itch.io page"
								icon={ItchIcon}
							/>
						</div>
					</div>
					<div className="max-w-xs px-2.5 pb-16 lg:block lg:max-w-none lg:pb-0">
						<Image
							src={page.splash.url}
							alt=""
							width={512}
							height={512}
							className="rounded-md object-cover"
						/>
					</div>
				</div>
			</Container>
			<Container className="mt-6 p-6 ">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<ProjectsSection projects={projects} />
					<div className="space-y-10 lg:pl-16 xl:pl-24">
						<Resume skills={skills} download={resume} />
						<Contact />
					</div>
				</div>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const query = `query {
		Page(id: "63b4723fee0e2fcf686355ca") {
		  heading
		  subheading
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
		Projects {
		  docs {
			id
			name
			link
			featured
			description
			cta
			blurb
			priority
		  }
		}
		Skills {
		  docs {
			id
			name
			technologies
			priority
		  }
		}
		Resume(id: "63b9d599638ee8bc9aebb6ee") {
		  file {
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
			projects: content.Projects.docs,
			skills: content.Skills.docs,
			resume: content.Resume.file.url,
			profile: content.Profile
		},
		revalidate: revalidationSeconds
	};
}
