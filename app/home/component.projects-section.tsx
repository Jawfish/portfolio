import projects from '@/shared/data/projects.json';

import ProjectComponent from './component.project-card';

export default function ProjectsSection() {
	const sortedProjects = projects
		.filter(project => project.featured)
		.sort((a, b) => a.priority - b.priority);
	return (
		<section className="pt-6">
			<div className="flex flex-col gap-12">
				{sortedProjects.map(project => (
					<ProjectComponent key={project.name} project={project} />
				))}
			</div>
		</section>
	);
}
