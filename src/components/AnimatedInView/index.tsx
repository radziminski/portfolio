import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  animation: string;
  animationFillMode?: string;
  rootMarginY?: number;
  style?: Record<string, string | number>;
}

const AnimatedInView: React.FC<Props> = ({
  children,
  animation,
  animationFillMode = 'backwards',
  rootMarginY = -150,
  style = {}
}) => {
  const [wasInView, setWasInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `${rootMarginY}px 0px`
  });

  useEffect(() => {
    if (inView) setWasInView(true);
  }, [inView]);

  const parentStyles = { ...style };
  const animationStyle = { animation, animationFillMode, ...parentStyles };

  return (
    <div
      ref={ref}
      style={
        inView || wasInView ? animationStyle : { opacity: 0, ...parentStyles }
      }
    >
      {children}
    </div>
  );
};

export default AnimatedInView;
