import ImagePlaceholder from './ImagePlaceholder.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      {project.image ? (
        <img src={project.image} alt={project.title} className={styles.image} />
      ) : (
        <ImagePlaceholder label={project.title} />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tech}>
          {project.tech.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.link ? (
          <a
            className={styles.link}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel} →
          </a>
        ) : (
          <span className={styles.linkDisabled}>Link coming soon</span>
        )}
      </div>
    </article>
  );
}
