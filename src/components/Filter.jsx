import { useState } from 'react';

import Dropdown from '@/components/Dropdown';

/**
 * Provide a drop-down filter for project.category for the project.category array
 * @param {Object} props - An object of { projects, setProjects } where projects is an
 * array of projects and setProjects is a callback that sets which projects to display.
 */
export default function Filter({ projects, setProjects }) {
	const [selectedCategory, setCategory] = useState('All');

	/**
	 * Convert a string to title case (e.g. "web development" -> "Web Development")
	 * @param {string} str The term to be converted to title case.
	 * @returns {string} The title-cased term.
	 */
	const titleCase = str =>
		str
			.toLowerCase()
			.split(' ')
			.map(word => word[0].toUpperCase() + word.slice(1))
			.join(' ');

	/**
	 * Filter projects by category.
	 * @param {string} category The category to filter by.
	 * @returns {Array} The filtered projects.
	 */
	const filterProjects = category =>
		category === 'All'
			? projects
			: projects.filter(project => project.category === category.toLowerCase());

	const handleCategoryChange = e => {
		setCategory(e);
		setProjects(filterProjects(e));
	};

	return (
		<div className="flex w-full gap-8  md:flex-row">
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
