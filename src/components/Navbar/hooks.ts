import { useEffect, useState } from 'react';

export const useToggleStickedNav = () => {
  const [showStickedNav, setShowStickedNav] = useState(false);
  const SHOW_STICKED_NAV_OFFSET = window.innerHeight - 350;

  useEffect(() => {
    // TODO: Probably can be better with intersection observer
    const checkIfShowStickedNav = () => {
      if (window.scrollY > SHOW_STICKED_NAV_OFFSET && !showStickedNav)
        setShowStickedNav(true);
      else if (window.scrollY <= SHOW_STICKED_NAV_OFFSET && showStickedNav)
        setShowStickedNav(false);
    };

    window.addEventListener('scroll', checkIfShowStickedNav);

    return () => window.removeEventListener('scroll', checkIfShowStickedNav);
  }, [showStickedNav, setShowStickedNav, SHOW_STICKED_NAV_OFFSET]);

  return showStickedNav;
};
