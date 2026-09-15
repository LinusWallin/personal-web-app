import { publications } from '../data/content.js';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <section id="publications" className="section">
      <h2 className="sectionTitle">Research Publications</h2>
      <div className={styles.list}>
        {publications.map((pub) => (
          <div key={pub.title} className={styles.entry}>
            <p className={styles.role}>{pub.role}</p>
            <a
              className={styles.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.title}
            </a>
            <p className={styles.venue}>{pub.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
