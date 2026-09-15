import { useActiveSection } from '../hooks/useActiveSection.js';
import ThemeToggle from './ThemeToggle.jsx';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Header() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Section navigation">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
