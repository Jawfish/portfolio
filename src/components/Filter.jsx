import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/20/solid';

import Dropdown from '@/components/Dropdown';

// function constructOptionsList() {}

/**
 * Provide two drop-down filters for project.category with:
 * - Category, from the project.category array
 * - Technology, from the project.stack array
 * @param {Object} props - The props object.
 */
export default function ProjectsFilter({ projects, setProjects }) {
	const allTechOptions = [
		'All',
		// eslint-disable-next-line no-undef
		...new Set(
			projects.flatMap(project => project.stack).map(tech => tech.name)
		)
	];

	const allCategoryOptions = [
		'All',
		// eslint-disable-next-line no-undef
		...new Set(projects.map(project => titleCase(project.category)))
	];

	const [selectedCategory, setCategory] = useState('All');
	const [selectedTechnology, setTechnology] = useState('All');
	const [availableTechnologyOptions, setAvailableTechnologyOptions] =
		useState(allTechOptions);
	const [availableCategoryOptions, setAvailableCategoryOptions] =
		useState(allCategoryOptions);

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
		setProjects(filterProjects(e, selectedTechnology));

		// only show technologies if their projects.category array includes category
		if (e !== 'All') {
			const listOfOptions = allTechOptions.filter(technology =>
				projects
					.filter(project => project.category === e.toLowerCase())
					.some(project =>
						project.stack.some(
							tech => tech.name.toLowerCase() === technology.toLowerCase()
						)
					)
			);
			setAvailableTechnologyOptions(['All', ...listOfOptions]);
		} else {
			// if category is 'All', show all technologies
			setAvailableTechnologyOptions(allTechOptions);
		}
	};

	const handleTechnologyChange = e => {
		setTechnology(e);
		setProjects(filterProjects(selectedCategory, e));

		// only show categories if their projects.stack array includes technology
		if (e !== 'All') {
			const listOfOptions = allCategoryOptions.filter(category =>
				projects
					.filter(project => project.category === category.toLowerCase())
					.some(project =>
						project.stack.some(
							tech => tech.name.toLowerCase() === e.toLowerCase()
						)
					)
			);
			setAvailableCategoryOptions(['All', ...listOfOptions]);
		} else {
			// if technology is 'All', show all categories
			setAvailableCategoryOptions(allCategoryOptions);
		}
	};

	const handleReset = () => {
		setCategory('All');
		setTechnology('All');
		setProjects(projects);
		setAvailableTechnologyOptions(allTechOptions);
		setAvailableCategoryOptions(allCategoryOptions);
	};

	return (
		<>
			<div className="flex gap-8 pb-12">
				<div className="flex gap-8">
					<Dropdown
						category="Category"
						value={selectedCategory}
						onChange={handleCategoryChange}
						options={availableCategoryOptions.sort()}
					/>
					<Dropdown
						category="Technology"
						value={selectedTechnology}
						onChange={handleTechnologyChange}
						options={availableTechnologyOptions.sort()}
					/>
				</div>
				<button title="Reset filter" className="mt-7">
					<ArrowPathIcon
						className=" h-6 w-6 text-zinc-300 dark:text-zinc-700"
						onClick={handleReset}
					/>
				</button>
			</div>
		</>
	);
}
