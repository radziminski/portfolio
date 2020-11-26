import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  animation: string;
  animationFillMode?: string;
  rootMarginY?: number;
}

const AnimatedInView: React.FC<Props> = ({
  children,
  animation,
  animationFillMode = 'backwards',
  rootMarginY = -150
}) => {
  const [wasInView, setWasInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `${rootMarginY}px 0px`
  });

  useEffect(() => {
    if (inView) setWasInView(true);
  }, [inView]);

  const style = { animation, animationFillMode };

  return (
    <div ref={ref} style={inView || wasInView ? style : { opacity: 0 }}>
      {children}
    </div>
  );
};

export default AnimatedInView;
