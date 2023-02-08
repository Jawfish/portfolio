import { Project } from '@/globals';
import { Card } from '@/shared/components/card';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Card>
			{/* <Card.Eyebrow decorate>Featured Project</Card.Eyebrow> */}
			<Card.Title href={`/projects#${project.name}`}>{project.name}</Card.Title>
			<Card.Description>{project.blurb}</Card.Description>
			<Card.Cta>See More</Card.Cta>
		</Card>
	);
}
