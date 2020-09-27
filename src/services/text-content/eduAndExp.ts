import eduAndExpPL from 'assets/data/eduAndExpPL';
import eduAndExpEN from 'assets/data/eduAndExpEN';
import { Languages } from 'services/text-content';

export interface Experience {
  start: number;
  end: number;
  description: string;
}

export default function getEduAndExp(language: Languages): Experience[] {
  if (language === 'PL') return eduAndExpPL;
  return eduAndExpEN;
}
