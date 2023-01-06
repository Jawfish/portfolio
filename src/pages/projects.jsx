import Image from 'next/image';
import Head from 'next/head';
import React, { useState } from 'react';

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
import { IoClose as CloseIcon } from 'react-icons/io5';

function TechTags({ tags }) {
	return (
		<span className="absolute right-0 bottom-0 flex gap-1 pb-2 pr-2 sm:gap-2">
			{tags.map(tag => (
				<span
					key={tag.id}
					className="rounded-full border border-zinc-200 bg-white/90 px-1 text-xs  text-zinc-700 backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-900/90 dark:text-zinc-400 sm:px-2">
					{tag.name}
				</span>
			))}
		</span>
	);
}

function Modal({ project, handleClose }) {
	return (
		<div
			className="fixed top-0 left-0 z-50 grid h-screen w-screen overflow-y-auto overflow-x-hidden rounded-md bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-900/80"
			onClick={() => handleClose()}>
			{project.recording && (
				<div className="my-auto mx-auto max-w-full rounded-md shadow-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
					<CloseIcon className="absolute m-4 h-10 w-10  fill-zinc-500 transition-all hover:cursor-pointer hover:fill-zinc-300" />
					<video
						autoPlay={true}
						loop={true}
						controls={false}
						alt={project.name}
						className="rounded-lg">
						<source src={`${project.recording.url}`} type="video/mp4" />
					</video>
				</div>
			)}
		</div>
	);
}

function Project({ project, showModal }) {
	return (
		<a
			id={project.name}
			className="rounded-mg h-fit rounded-md  border border-zinc-100 dark:border-zinc-700/40  lg:max-w-md">
			<div className="relative">
				<Image
					className="rounded-t-md border-b border-zinc-100 dark:border-zinc-700/40"
					src={project.image?.url || ''}
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
				<TechTags tags={project.stack} />
			</div>
			<div className="p-5">
				<Card.Title className>{project.name}</Card.Title>
				<Card.Description>{project.description}</Card.Description>
				<div className="group-hover:text-teal-1000 relative z-10 mt-auto flex w-full gap-4 pt-2 text-sm font-medium text-zinc-400 transition-all dark:text-zinc-200">
					{project.link && (
						<Link href={project.link} className="group flex items-end">
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
					{project.recording && (
						<div className="flex cursor-pointer items-end">
							<span
								onClick={() => showModal(project)}
								className="inline-flex items-center gap-1 text-xs font-normal transition-all hover:text-emerald-500">
								Watch Demo
							</span>
						</div>
					)}
				</div>
			</div>
		</a>
	);
}

function ProjectsSection({ items, icon, title, showModal }) {
	return (
		<div>
			<h2 className="mt-16 mb-8 flex text-2xl text-zinc-900 dark:text-zinc-100">
				{icon}
				<span className="ml-3">{title}</span>
			</h2>
			<ul
				role="list"
				className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
				{items.map((project, i) => (
					<Project key={i} project={project} showModal={showModal} />
				))}
			</ul>
		</div>
	);
}

export default function Projects({ projects }) {
	const [show, setShow] = useState(false);
	const [project, setProject] = useState(null);

	const handleClose = () => {
		setShow(false);
		setProject(null);
	};
	const handleShow = project => {
		setProject(project);
		setShow(true);
	};

	projects.reverse();
	return (
		<>
			<Head>
				<title>Projects - James Fitzgerald</title>
				<meta name="description" content="Things I’ve made." />
			</Head>
			{show && <Modal project={project} handleClose={handleClose} />}
			<SimpleLayout
				title="Some of the things I've made."
				intro="I have a range of personal projects I've worked on, including websites, games, and utilities, most of which are open-source and available on my GitHub. Take a look at the code to see how I tackle projects, and feel free to check out the rest of my GitHub profile.">
				<ProjectsSection
					items={projects.filter(project => project.category === 'website')}
					showModal={handleShow}
					icon={
						<WebsiteIcon className="inline-flex h-8 w-8 self-center text-zinc-700 dark:text-zinc-400" />
					}
					title="Websites"
				/>
				<ProjectsSection
					items={projects.filter(project => project.category === 'game')}
					showModal={handleShow}
					icon={
						<GameIcon className="inline-flex h-8 w-8 self-center text-zinc-700 dark:text-zinc-400" />
					}
					title="Games"
				/>
				<ProjectsSection
					items={projects.filter(project => project.category === 'utility')}
					showModal={handleShow}
					icon={
						<UtilityIcon className="h-8 w-8 flex-none text-zinc-700 dark:text-zinc-400" />
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
			recording {
			  url
			}
			stack {
			  id
			  name
			}
			image {
			  url
			}
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
