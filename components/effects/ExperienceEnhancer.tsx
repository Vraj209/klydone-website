'use client';

import { useEffect } from 'react';

type ParallaxElement = HTMLElement & {
  dataset: DOMStringMap & { parallaxSpeed?: string };
};

export default function ExperienceEnhancer() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    revealElements.forEach((el) => el.classList.add('reveal'));

    // If reduced motion is enabled, reveal immediately and skip parallax updates.
    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));

    const parallaxElements = Array.from(
      document.querySelectorAll<ParallaxElement>('[data-parallax-speed]')
    );
    const positions = new WeakMap<HTMLElement, number>();
    let frame = 0;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      parallaxElements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.08);
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        // Target offset uses distance from viewport center.
        const target = -(elementCenter - viewportCenter) * speed;
        const current = positions.get(el) ?? 0;
        // Lerp for smooth ease-in/ease-out feel.
        const next = current + (target - current) * 0.12;
        positions.set(el, next);
        el.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0)`;
      });

      frame = window.requestAnimationFrame(updateParallax);
    };

    frame = window.requestAnimationFrame(updateParallax);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      parallaxElements.forEach((el) => {
        el.style.transform = '';
      });
    };
  }, []);

  return null;
}

