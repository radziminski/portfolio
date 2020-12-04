import * as textPL from 'assets/data/textPL';
import * as textEN from 'assets/data/textEN';
import { Language } from 'services/text-content';

export interface TextContent {
  about: string;
  greetings: {
    early: string;
    mid: string;
    late: string;
  };
  headerTitle: string;
  headerSubtitle: string;
  sectionTitles: Record<string, string>;
  contactMsg: string;
  tel: string;
  btns: {
    contact: string;
    about: string;
    send: string;
    browseCode: string;
    liveDemo: string;
  };
  form: {
    subject: string;
    message: string;
    messageSuccess: string;
    messageFail: string;
  };
}

export default function getText(language: Language): TextContent {
  if (language === 'PL') return textPL;
  return textEN;
}
