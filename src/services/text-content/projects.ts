import projectsPL from 'assets/data/projectsPL';
import projectsEN from 'assets/data/projectsEN';
import { Language } from 'services/text-content';

export interface Project {
  title: string;
  subTitle: string;
  description: string;
  githubLink: string;
  liveLink: string;
  stack: string[];
  image: string;
}

export default function getProjects(language: Language): Project[] {
  if (language === 'PL') return projectsPL;
  return projectsEN;
}
