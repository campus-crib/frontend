import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AuthStep } from '../types/auth.types';

export const useAuthAnimation = (step: AuthStep) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.auth-animate', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, [step]);

  return containerRef;
};
