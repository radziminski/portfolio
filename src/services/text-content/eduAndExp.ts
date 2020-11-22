import eduAndExpPL from 'assets/data/eduAndExpPL';
import eduAndExpEN from 'assets/data/eduAndExpEN';
import { Language } from 'services/text-content';

export interface Experience {
  start: number;
  end: number;
  title: string;
  description: string;
}

export default function getEduAndExp(language: Language): Experience[] {
  if (language === 'PL') return eduAndExpPL;
  return eduAndExpEN;
}
