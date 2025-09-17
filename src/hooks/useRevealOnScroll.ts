"use client"
import { useState, useEffect, useRef } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';
  duration?: number;
  delay?: number;
  triggerOnce?: boolean;
}

export const useRevealOnScroll = <T extends HTMLElement = HTMLElement>(options: RevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationType = 'fadeUp',
    duration = 0.6,
    delay = 0,
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  const getAnimationClass = () => {
    if (!isVisible && !hasTriggered) return 'reveal-hidden';
    return `reveal-${animationType} reveal-visible`;
  };

  const getAnimationStyle = () => {
    if (!isVisible && !hasTriggered) {
      return {
        transition: `all ${duration}s ease-out ${delay}s`
      };
    }
    return {
      transition: `all ${duration}s ease-out ${delay}s`
    };
  };

  return {
    ref: elementRef,
    isVisible: isVisible || hasTriggered,
    animationClass: getAnimationClass(),
    animationStyle: getAnimationStyle()
  };
};

export const useRevealOnScrollMultiple = <T extends HTMLElement = HTMLElement>(options: RevealOptions & { stagger?: number } = {}) => {
  const {
    stagger = 0.1,
    ...singleOptions
  } = options;

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.reveal-item');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Set(Array.from(items).map((_, index) => index)));
          if (singleOptions.triggerOnce !== false) {
            setHasTriggered(true);
          }
        } else if (singleOptions.triggerOnce === false) {
          setVisibleItems(new Set());
        }
      },
      {
        threshold: singleOptions.threshold || 0.1,
        rootMargin: singleOptions.rootMargin || '0px 0px -50px 0px'
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [singleOptions.threshold, singleOptions.rootMargin, singleOptions.triggerOnce]);

  const getItemAnimationClass = (index: number) => {
    const isVisible = visibleItems.has(index) || hasTriggered;
    if (!isVisible) return 'reveal-hidden';
    return `reveal-${singleOptions.animationType || 'fadeUp'} reveal-visible`;
  };

  const getItemAnimationStyle = (index: number) => {
    const delay = (singleOptions.delay || 0) + (index * stagger);
    return {
      transition: `all ${singleOptions.duration || 0.6}s ease-out ${delay}s`
    };
  };

  return {
    ref: containerRef,
    visibleItems: Array.from(visibleItems),
    hasTriggered,
    getItemAnimationClass,
    getItemAnimationStyle
  };
};
