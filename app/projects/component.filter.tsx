'use client';

import { useState } from 'react';

import { titleCase } from '@/shared/lib/utils';
import { Project } from '@/globals';

import Dropdown from './component.dropdown';

/**
 * Provide a drop-down filter for project.category for the project.category array
 * @param {Object} props - An object of { projects, setProjects } where projects is an
 * array of projects and setProjects is a callback that sets which projects to display.
 */
export default function Filter({
	projects,
	setProjects
}: {
	projects: Array<Project>;
	setProjects: (projects: Array<Project>) => void;
}) {
	const [selectedCategory, setCategory] = useState('All');

	/**
	 * Filter projects by category.
	 * @param {string} category The category to filter by.
	 * @returns {Array} The filtered projects.
	 */
	const filterProjects = (category: string) =>
		category === 'All'
			? projects
			: projects.filter(project => project.category === category.toLowerCase());

	const handleCategoryChange = (e: string) => {
		setCategory(e);
		setProjects(filterProjects(e));
	};

	return (
		<div className="flex w-full gap-8 md:flex-row">
			<Dropdown
				value={selectedCategory}
				onChange={handleCategoryChange}
				options={[
					'All',
					// eslint-disable-next-line no-undef
					...new Set(projects.map(project => titleCase(project.category)))
				].sort()}
			/>
		</div>
	);
}
