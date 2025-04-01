import React from 'react'
import projects from '../../data/Projects.json';
import Styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className={Styles.container} id='projects'>
      <h2 className={Styles.title}>Projects</h2>
      <div className={Styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>
        })}
      </div>
    </section>
  )
}

export default Projects
