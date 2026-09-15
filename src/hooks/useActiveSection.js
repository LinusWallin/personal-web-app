import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    let ticking = false;

    function update() {
      ticking = false;
      const scrollY = window.scrollY;
      // Trigger once a section's heading scrolls just past the sticky header,
      // rather than deep into the viewport — keeps short sections from
      // overlapping with the next one's threshold.
      const offset = 96;
      const doc = document.documentElement;
      const atBottom = scrollY + window.innerHeight >= doc.scrollHeight - 2;

      let current = null;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= scrollY + offset) {
          current = el.id;
        } else {
          break;
        }
      }

      // Once the page has hit its scroll limit, always credit the last
      // section — a short trailing section (e.g. the footer) may never
      // reach the offset threshold on its own.
      if (atBottom) {
        current = elements[elements.length - 1].id;
      }

      setActiveId(current);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return activeId;
}
