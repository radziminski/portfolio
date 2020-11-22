import navLinksPL from 'assets/data/navLinksPL';
import navLinksEN from 'assets/data/navLinksEN';
import { Language } from 'services/text-content';

export interface NavLink {
  name: string;
  linkTo: string;
}

export default function getNavLinks(language: Language): NavLink[] {
  if (language === 'PL') return navLinksPL;
  return navLinksEN;
}
