import { profile } from '../data/content.js';
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './icons.jsx';
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
          <a
            className={styles.iconLink}
            href={`mailto:${profile.email}`}
            aria-label="Email me"
            title="Email me"
          >
            <MailIcon />
          </a>
          {profile.showPhone && profile.phone && (
            <a
              className={styles.iconLink}
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              aria-label="Call me"
              title={profile.phone}
            >
              <PhoneIcon />
            </a>
          )}
          {profile.linkedinUrl && (
            <a
              className={styles.iconLink}
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          )}
          {profile.githubUrl && (
            <a
              className={styles.iconLink}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
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
