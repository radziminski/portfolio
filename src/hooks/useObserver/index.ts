import { useEffect } from 'react';

const useObserver = (
  ref: React.RefObject<HTMLElement>,
  onEnter: () => void,
  threshold = 0.01
) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;
    let observedElement: HTMLElement | null = null;

    const observerOptions = {
      threshold,
      rootMargin: '75%'
    };

    if (ref?.current) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            )
              onEnter();
          });
        }, observerOptions);

        observer.observe(ref.current);
        observedElement = ref.current;
      } else {
        onEnter();
      }
    }

    return () => {
      didCancel = true;
      if (observer?.unobserve && observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [ref, threshold, onEnter]);
};

export default useObserver;
