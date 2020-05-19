import * as textPL from './textPL';
import * as textEN from './textEN';

export default function getText(language) {
    if (language === 'PL') return textPL;
    return textEN;
}
