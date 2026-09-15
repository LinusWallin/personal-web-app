import { skills } from '../data/content.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="sectionTitle">Skills</h2>
      <div className={styles.groups}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.category}</h3>
            <div className={styles.pills}>
              {group.items.map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
