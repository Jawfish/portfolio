'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Project } from '@/globals';

import Filter from './component.filter';
import Modal from './component.modal';
import ProjectCard from './component.project-card';

export default function ProjectsSection({
	projects
}: {
	projects: Array<Project>;
}) {
	const [filteredItems, setFilteredItems] = useState(projects);
	const [show, setShow] = useState(false);
	const [project, setProject] = useState<Project | null>(null);

	const handleClose = () => {
		setShow(false);
		setProject(null);
	};
	const handleShow = (project: Project) => {
		setProject(project);
		setShow(true);
	};

	return (
		// <section> is not needed because the parent component already has it
		<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
			<AnimatePresence>
				{show && project && (
					<Modal project={project} handleClose={handleClose} />
				)}
			</AnimatePresence>

			<div className="col-span-1">
				<Filter projects={projects} setProjects={setFilteredItems} />
			</div>
			<div className="xl:col-span-2"></div>
			<AnimatePresence>
				{filteredItems.map((project: Project, i: number) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0, zIndex: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.15 }}>
						<ProjectCard project={project} showModal={handleShow} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
