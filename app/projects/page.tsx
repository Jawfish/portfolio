import Layout from '@/shared/components/layout';
import p from '@/shared/data/projects.json';

import ProjectsSection from './component.projects-section';

/**
 * This is the page where projects are listed.
 */
export default function Projects() {
  return (
    <Layout
      title="Some of the things I've made."
      intro="I've worked on a range of projects, including websites, games, and utilities, most of which are open-source and available on my GitHub. Take a look at the code to see how I tackle projects, and feel free to check out the rest of my GitHub profile.">
      <ProjectsSection projects={p} />
    </Layout>
  );
}
