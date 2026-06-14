import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      from = { opacity: 0, y: 40 },
      to = { opacity: 1, y: 0 },
      duration = 0.7,
      stagger = 0,
      selector = null,
    } = options;

    const targets = selector ? el.querySelectorAll(selector) : [el];

    gsap.fromTo(targets, from, {
      ...to,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return ref;
}
