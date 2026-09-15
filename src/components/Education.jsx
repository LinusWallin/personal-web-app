import { education } from '../data/content.js';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="sectionTitle">Education</h2>
      <div className={styles.list}>
        {education.map((entry) => (
          <div key={entry.degree} className={styles.entry}>
            <div className={styles.header}>
              <h3 className={styles.degree}>{entry.degree}</h3>
              <span className={styles.dates}>{entry.dates}</span>
            </div>
            <p className={styles.institution}>{entry.institution}</p>
            <p className={styles.thesis}>
              Thesis: <em>{entry.thesisTitle}</em>
              {entry.thesisLink && (
                <>
                  {' — '}
                  <a href={entry.thesisLink} target="_blank" rel="noopener noreferrer">
                    read more
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
