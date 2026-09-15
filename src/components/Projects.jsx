import { projects } from '../data/content.js';
import ProjectCard from './ProjectCard.jsx';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
