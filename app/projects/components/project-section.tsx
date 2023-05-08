'use client';
import { useState } from 'react';
import Head from 'next/head';

import { Project } from '@/globals';

import Filter from './filter';
import Modal from './modal';
import ProjectCard from './project-card';

export default function ProjectsSection({
  projects
}: {
  projects: Array<Project>;
}) {
  const [visibleProjects, setVisibleProjects] = useState(() =>
    projects.map(() => true)
  );
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

  const updateVisibleProjects = (filteredProjects: Project[]) => {
    setVisibleProjects(
      projects.map(project => filteredProjects.includes(project))
    );
  };

  return (
    // <section> is not needed because the parent component already has it
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
      {show && project && <Modal project={project} handleClose={handleClose} />}

      <div className="col-span-1">
        <Filter projects={projects} setProjects={updateVisibleProjects} />
      </div>
      <div className="xl:col-span-2"></div>
      {projects.map((project: Project, index: number) => (
        <ProjectCard
          project={project}
          showModal={handleShow}
          key={project.name}
          hidden={!visibleProjects[index]}
        />
      ))}
    </div>
  );
}
