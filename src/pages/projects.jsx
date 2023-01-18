import Image from 'next/image';
import React, { useState } from 'react';
import { SimpleLayout } from '@/components/SimpleLayout';
import { endpoint, revalidationSeconds } from '@/lib/client';
import { Card } from '@/components/Card';
import Link from 'next/link';
import { BiLinkExternal as LinkIcon } from 'react-icons/bi';
import { IoClose as CloseIcon } from 'react-icons/io5';
import { Meta } from '@/components/Meta';

function ProjectsFilterCategory({ category, value, onChange, options }) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={category} className="text-sm font-semibold">
				{category}
			</label>
			<select
				id={category}
				name={category}
				className="rounded-md border border-zinc-200 dark:border-zinc-600/70 dark:bg-zinc-800 dark:text-zinc-400/70"
				value={value}
				onChange={onChange}>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

/**
 * Provide two drop-down filters for project.category with:
 * - Category, from the project.category array
 * - Technology, from the project.stack array
 * @param {Object} props - The props object.
 */
function ProjectsFilter({ projects, setProjects }) {
	/**
	 * Convert a string to title case (e.g. "web development" -> "Web Development")
	 * @param {string} str The term to be converted to title case.
	 * @returns {string} The title-cased term.
	 */
	function titleCase(str) {
		return str
			.toLowerCase()
			.split(' ')
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			})
			.join(' ');
	}

	const [category, setCategory] = useState('All');
	const [technology, setTechnology] = useState('All');

	/**
	 * Filter projects by category and/or technology.
	 * @param {string} category The category to filter by.
	 * @param {string} technology The technology to filter by.
	 * @returns {Array} The filtered projects.
	 */
	const filterProjects = (category, technology) => {
		if (category === 'All' && technology === 'All') return projects;
		return projects.filter(project => {
			if (category !== 'All' && project.category !== category.toLowerCase())
				return false;
			if (
				technology !== 'All' &&
				!project.stack.some(
					tech => tech.name.toLowerCase() === technology.toLowerCase()
				)
			)
				return false;
			return true;
		});
	};

	const handleCategoryChange = e => {
		setCategory(e.target.value);
		setProjects(filterProjects(e.target.value, technology));
	};

	const handleTechnologyChange = e => {
		setTechnology(e.target.value);
		setProjects(filterProjects(category, e.target.value));
	};

	return (
		<>
			<div className="flex gap-4">
				<ProjectsFilterCategory
					category="Category"
					value={category}
					onChange={handleCategoryChange}
					options={[
						'All',
						// eslint-disable-next-line no-undef
						...new Set(projects.map(project => titleCase(project.category)))
					]}
				/>
				<ProjectsFilterCategory
					category="Technology"
					value={technology}
					onChange={handleTechnologyChange}
					options={
						// create array of tech found in projects.stack for all projects
						[
							'All',
							// eslint-disable-next-line no-undef
							...new Set(
								projects
									.flatMap(project => project.stack)
									.map(tech => titleCase(tech.name))
							)
						]
					}
				/>
			</div>
		</>
	);
}

function TechTags({ tags }) {
	return (
		<span className="flex gap-2 pb-3 pr-2">
			{tags.map(tag => (
				<span
					key={tag.id}
					className={`rounded  border-t border-l border-r border-zinc-200 bg-zinc-100 px-2 py-0.5 text-zinc-500 backdrop-blur-sm dark:border-zinc-600/70 dark:bg-zinc-800 dark:text-zinc-400/70 sm:px-2 tag-${
						tag.name?.toLowerCase() || 'default'
					}`}
					style={{ fontSize: '0.8rem' }}>
					{tag.name}
				</span>
			))}
		</span>
	);
}

function Modal({ project, handleClose }) {
	return (
		<aside
			className="fixed top-0 left-0 z-50 grid h-screen w-screen overflow-y-auto overflow-x-hidden rounded bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-900/80"
			onClick={() => handleClose()}
			onKeyDown={() => handleClose()}
			role={'presentation'}>
			{project.recording && (
				<div className="my-auto mx-auto max-w-full rounded shadow-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
					<CloseIcon className="absolute m-4 h-10 w-10  fill-zinc-500 transition-all hover:cursor-pointer hover:fill-zinc-300" />
					<video
						autoPlay={true}
						loop={true}
						controls={false}
						alt={project.name}
						className="rounded-lg"
						muted>
						<source src={`${project.recording.url}`} type="video/mp4" />
					</video>
				</div>
			)}
		</aside>
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
