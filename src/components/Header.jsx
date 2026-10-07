import { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';
import ThemeToggle from './ThemeToggle.jsx';
import { CloseIcon, MenuIcon } from './icons.jsx';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Header({ theme, toggleTheme }) {
  const activeId = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // Close the mobile menu on Escape or on a click/tap outside the header
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div id="site-menu" className={styles.menu} data-open={open}>
          <nav className={styles.nav} aria-label="Section navigation">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeId}`;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className={styles.themeRow}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
