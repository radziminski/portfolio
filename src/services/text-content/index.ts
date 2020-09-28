import React, { createContext } from 'react';

import getText, { TextContent } from 'services/text-content/text';
import getNavLinks, { NavLink } from './navLinks';
import getProjects, { Project } from './projects';
import getEduAndExp, { Experience } from './eduAndExp';

const DEFAULT_LANGUAGE = 'EN';
export type Languages = 'EN' | 'PL';

interface TextContentContext {
  text: TextContent;
  navLinks: NavLink[];
  eduAndExp: Experience[];
  projects: Project[];
  setLanguage: null | React.Dispatch<React.SetStateAction<Languages>>;
  language: Languages;
}

const TextContentContext = createContext<TextContentContext>({
  text: getText(DEFAULT_LANGUAGE),
  setLanguage: null,
  navLinks: getNavLinks(DEFAULT_LANGUAGE),
  eduAndExp: getEduAndExp(DEFAULT_LANGUAGE),
  projects: getProjects(DEFAULT_LANGUAGE),
  language: DEFAULT_LANGUAGE
});

export default TextContentContext;
