import React, { createContext } from 'react';

import { TextContent } from 'services/text-content/textType';
import { NavLink } from 'services/text-content/navLinks';
import getText from 'services/text-content/text';
import { Experience } from './eduAndExp';
import getNavLinks from './navLinks';
import getProjects from './projects';
import getEduAndExp from './eduAndExp';

const DEFAULT_LANGUAGE = 'EN';
export type Languages = 'EN' | 'PL';

interface TextContentContext {
  text: TextContent;
  navLinks: NavLink[];
  eduAndExp: Experience[];
  projects: any;
  setLanguage: null | React.Dispatch<React.SetStateAction<Languages>>;
}

const TextContentContext = createContext<TextContentContext>({
  text: getText(DEFAULT_LANGUAGE),
  setLanguage: null,
  navLinks: getNavLinks(DEFAULT_LANGUAGE),
  eduAndExp: getEduAndExp(DEFAULT_LANGUAGE),
  projects: getProjects(DEFAULT_LANGUAGE)
});

export default TextContentContext;
