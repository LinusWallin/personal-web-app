import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/content.js';
import ProjectCard from './ProjectCard.jsx';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      const getDistance = () => track.scrollWidth - pin.clientWidth;

      // The outer section itself is never pinned or hidden by the
      // mobile/desktop heading toggle below, so its top position stays a
      // stable reference point for "where the pinned track naturally
      // begins" regardless of which heading variant is currently visible.
      const getSectionTop = () =>
        sectionRef.current.getBoundingClientRect().top + window.scrollY;

      // Once the section reaches the top, pin it and turn the rest of the
      // scroll into pure horizontal movement through the remaining cards.
      // Created first (before track has any transform applied) so its
      // lazily-captured "from" state is the untransformed x:0 resting
      // position, not whatever the entrance tween below has set it to.
      const pinnedTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: () => getSectionTop(),
          end: () => getSectionTop() + getDistance(),
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Entrance: while the section scrolls normally into place, the cards
      // slide in from off-screen right — vertical and horizontal motion
      // happen together, arriving at the resting position exactly where
      // the pinned tween above takes over (same getSectionTop() boundary).
      const entranceTween = gsap.fromTo(
        track,
        { x: () => window.innerWidth },
        {
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: () => getSectionTop() - window.innerHeight,
            end: () => getSectionTop(),
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        entranceTween.scrollTrigger?.kill();
        entranceTween.kill();
        pinnedTween.scrollTrigger?.kill();
        pinnedTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={`section ${styles.mobileHeading}`}>
        <h2 className="sectionTitle">Projects</h2>
      </div>
      <div ref={pinRef} className={styles.pin}>
        <div ref={trackRef} className={styles.track}>
          <h2 className={`verticalSectionTitle ${styles.desktopHeading}`}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className={styles.trackItem}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
