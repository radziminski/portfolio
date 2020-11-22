import { IconifyIcon } from '@iconify/react';
import * as skillsPL from 'assets/data/skillsPL';
import * as skillsEN from 'assets/data/skillsEN';
import { Language } from 'services/text-content';

export interface Skill {
  title: string;
  description: string;
  icon: IconifyIcon;
  type: 'web' | 'other';
  iconScaleFactor?: number;
}

export default function getSkills(
  language: Language
): { main: Skill[]; side: string[] } {
  if (language === 'PL') return skillsPL;
  return skillsEN;
}
