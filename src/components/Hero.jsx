import { profile } from '../data/content.js';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={`${styles.hero} section`}>
      <p className={styles.eyebrow}>Hi, I'm</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.title}>{profile.title}</p>
      <p className={styles.summary}>{profile.summary}</p>
      <div className={styles.actions}>
        <a className={styles.primaryButton} href={`mailto:${profile.email}`}>
          Email me
        </a>
        {profile.linkedinUrl && (
          <a
            className={styles.secondaryButton}
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        {profile.githubUrl && (
          <a
            className={styles.secondaryButton}
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
