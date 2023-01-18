import Image from 'next/image';
import React, { useState } from 'react';
import { SimpleLayout } from '@/components/SimpleLayout';
import { endpoint, revalidationSeconds } from '@/lib/client';
import { Card } from '@/components/Card';
import Link from 'next/link';
import { BiLinkExternal as LinkIcon } from 'react-icons/bi';
import { Meta } from '@/components/Meta';
import ProjectsFilter from '@/components/Filter';
import Modal from '@/components/Modal';

function TechTags({ tags }) {
	return (
		<span className="flex gap-2 pb-3 pr-2">
			{tags.map(tag => (
				<span
					key={tag.id}
					className={`rounded  border-t border-l border-r border-zinc-100 bg-zinc-50 px-2 py-0.5 text-zinc-500 backdrop-blur-sm dark:border-zinc-600/70 dark:bg-zinc-800 dark:text-zinc-300/70 sm:px-2 tag-${
						tag.name?.toLowerCase() || 'default'
					}`}
					style={{ fontSize: '0.8rem' }}>
					{tag.name}
				</span>
			))}
		</span>
	);
}

function Project({ project, showModal }) {
	return (
		<div
			id={project.name}
			className="h-fit rounded  border border-zinc-100 dark:border-zinc-700/40  lg:max-w-md">
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
			</div>
			<div className="p-5">
				<TechTags tags={project.stack} />
				<Card.Title>{project.name}</Card.Title>
				<Card.Description>{project.description}</Card.Description>
				<div className="group-hover:text-teal-1000 relative z-10 mt-auto flex w-full gap-4  pt-3 text-sm font-medium text-zinc-400 transition-all dark:text-zinc-200">
					{project.link && (
						<Link
							href={project.link}
							passHref={true}
							target="_blank"
							className="group flex items-end">
							<span className="inline-flex items-center gap-1 text-xs font-normal text-emerald-500 transition-all hover:text-emerald-300">
								{project.cta}
								<LinkIcon className="mt-0.5" />
							</span>
						</Link>
					)}
					{project.github && (
						<Link
							href={project.github}
							passHref={true}
							target="_blank"
							className="flex items-end">
							<span className="inline-flex items-center gap-1 text-xs font-normal text-emerald-500 transition-all hover:text-emerald-300">
								Source
							</span>
						</Link>
					)}
					{project.recording && (
						<div className="flex cursor-pointer items-end">
							<button
								onClick={() => showModal(project)}
								className="inline-flex items-center gap-1 text-xs font-normal text-emerald-500 transition-all hover:text-emerald-300">
								Watch Demo
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function ProjectsSection({ items, showModal }) {
	const [filteredItems, setFilteredItems] = useState(items);
	return (
		<div>
			<ProjectsFilter projects={items} setProjects={setFilteredItems} />
			<ul className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
				{filteredItems.map((project, i) => (
					<Project key={i} project={project} showModal={showModal} />
				))}
			</ul>
		</div>
	);
}

export default function Projects({ projects, page }) {
	const [show, setShow] = useState(false);
	const [project, setProject] = useState(null);
	projects = projects.sort((a, b) => a.priority - b.priority);

	const handleClose = () => {
		setShow(false);
		setProject(null);
	};
	const handleShow = project => {
		setProject(project);
		setShow(true);
	};

	return (
		<>
			<Meta page={page} />
			{show && <Modal project={project} handleClose={handleClose} />}
			<SimpleLayout title={page.heading} intro={page.subheading}>
				<ProjectsSection
					// items={projects.filter(project => project.category === 'website')}
					items={projects}
					showModal={handleShow}
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
			priority
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
		Page(id: "63b9b49dfc7bbfa352ef7f94") {
		  heading
		  subheading
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
			projects: content.Projects.docs,
			page: content.Page
		},
		revalidate: revalidationSeconds
	};
}
