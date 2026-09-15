import styles from './ImagePlaceholder.module.css';

export default function ImagePlaceholder({ label }) {
  return (
    <div className={styles.placeholder} role="img" aria-label={`Screenshot coming soon for ${label}`}>
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.75" />
        <path d="M21 16l-5.5-5.5a2 2 0 00-2.83 0L4 19" />
      </svg>
      <span>Screenshot coming soon</span>
    </div>
  );
}
