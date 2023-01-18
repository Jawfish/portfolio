import { useState } from 'react';

import Dropdown from '@/components/Dropdown';

/**
 * Provide two drop-down filters for project.category with:
 * - Category, from the project.category array
 * - Technology, from the project.stack array
 * @param {Object} props - The props object.
 */
export default function ProjectsFilter({ projects, setProjects }) {
	const [category, setCategory] = useState('All');
	const [technology, setTechnology] = useState('All');

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
		setCategory(e);
		setProjects(filterProjects(e, technology));
	};

	const handleTechnologyChange = e => {
		setTechnology(e);
		setProjects(filterProjects(category, e));
	};

	return (
		<>
			<div className="flex gap-8 pb-12">
				<Dropdown
					category="Category"
					value={category}
					onChange={handleCategoryChange}
					options={[
						'All',
						// eslint-disable-next-line no-undef
						...new Set(projects.map(project => titleCase(project.category)))
					]}
				/>
				<Dropdown
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
									.map(tech => tech.name)
							)
						]
					}
				/>
			</div>
		</>
	);
}
