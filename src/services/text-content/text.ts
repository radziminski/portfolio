import * as textPL from 'assets/data/textPL';
import * as textEN from 'assets/data/textEN';
import { TextContent } from './textType';
import { Languages } from 'services/text-content';

export default function getText(language: Languages): TextContent {
  if (language === 'PL') return textPL;
  return textEN;
}
