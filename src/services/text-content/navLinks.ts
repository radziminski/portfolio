import navLinksPL from 'assets/data/navLinksPL';
import navLinksEN from 'assets/data/navLinksEN';
import { Languages } from 'services/text-content';

export interface NavLink {
  name: string;
  linkTo: string;
}

export default function getNavLinks(language: Languages): NavLink[] {
  if (language === 'PL') return navLinksPL;
  return navLinksEN;
}
