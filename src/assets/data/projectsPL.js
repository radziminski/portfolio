/* eslint-disable */
import offMuseum from 'assets/img/off_museum.jpg';
import sortify from 'assets/img/sortify.jpg';
import covid from 'assets/img/covid.jpg';
function Project(
  title,
  subTitle,
  description,
  githubLink,
  liveLink,
  stack = [],
  image
) {
  return {
    title,
    subTitle,
    description,
    githubLink,
    liveLink,
    stack,
    image
  };
}

const projects = [
  Project(
    'Sortify',
    'Animacje algorytmów sortujących',
    "Aplikacja internetowa prezentująca animacje różnych algorytmów sortujących. Używa zawaaansowanego asynchronicznego javascript'a do dokłądnego synchronizowania animacji.",
    'https://github.com/radziminski/sortify',
    'https://radziminski.github.io/sortify',
    ['html', 'css', 'js'],
    sortify
  ),
  Project(
    'Baza Pytań COVID',
    'Portal FAQ',
    'Strona stworzona na potrzeby wolontariatu pomogającemu polskiej służbie zdoriwa. Zawiera pełną i kompletną autoryzację z różnymi rolami użytkowników.',
    'https://github.com/radziminski/baza-pytan-react',
    'https://baza-pytan-covid.netlify.com',
    ['react', 'redux', 'firebase']
  ),
  Project(
    'OFF Museum',
    'Strona muzeum sztuki',
    'Stronga muzeum sztuki nowoczesnej zrobiona w HTML, CSS i odrobiną javascript.',
    'https://github.com/radziminski/off-museum',
    'https://radziminski.github.io/off-museum',
    ['html', 'css'],
    offMuseum
  ),
  Project(
    'Collab Finder',
    'Aplikacja łącząca producentów muzycznych',
    'Aplikacja inspirowana mediami społecznościowymi pozwalająca muzykom znajdowanie innych producentów w celu wspólnej współpracy.',
    'https://github.com/radziminski/collab-finder',
    '',
    ['react', 'redux', 'nodejs', 'mongodb'],
    null
  )
];

export default projects;
