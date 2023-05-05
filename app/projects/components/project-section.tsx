'use client';
import { useState } from 'react';

import { Project } from '@/globals';

import Filter from './filter';
import Modal from './modal';
import ProjectCard from './project-card';

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
      {show && project && <Modal project={project} handleClose={handleClose} />}

      <div className="col-span-1">
        <Filter projects={projects} setProjects={setFilteredItems} />
      </div>
      <div className="xl:col-span-2"></div>
      {filteredItems.map((project: Project) => (
        <ProjectCard
          project={project}
          showModal={handleShow}
          key={project.name}
        />
      ))}
    </div>
  );
}
