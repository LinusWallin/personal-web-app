import { profile } from '../data/content.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`${styles.inner} section`}>
        <h2 className="sectionTitle">Get in touch</h2>
        <p className={styles.blurb}>
          I'm always happy to talk about new opportunities, collaborations, or just tech in general.
        </p>
        <div className={styles.links}>
          <a className={styles.link} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.showPhone && profile.phone && (
            <span className={styles.link}>{profile.phone}</span>
          )}
          {profile.linkedinUrl && (
            <a
              className={styles.link}
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          {profile.githubUrl && (
            <a
              className={styles.link}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
        <p className={styles.copyright}>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
