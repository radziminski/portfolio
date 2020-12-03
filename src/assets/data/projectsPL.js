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
    "Aplikacja internetowa prezentująca animacje różnych algorytmów sortujących. Używa asynchronicznego Javascript'u do dokładnego synchronizowania animacji. Napisana w czystym JS, CSS i HTML. ",
    'https://github.com/radziminski/sortify',
    'https://radziminski.github.io/sortify',
    ['html', 'css', 'js'],
    sortify
  ),
  Project(
    'Baza Pytań COVID',
    'Portal FAQ',
    'Aplikacja stworzona na potrzeby wolontariatu pomogającemu polskiej służbie zdoriwa. Zawiera pełną i kompletną autoryzację z różnymi rolami użytkowników. Służyła jako centrum pytań i odpowiedzi dla pracowników służby zdrowia - każdy zalogowany użytkownik mógł dodać pytanie, lecz tylko wybrani (recenzenci) mogli pytania akceptować i dodawać do publicznej listy. ',
    'https://github.com/radziminski/baza-pytan-react',
    'https://baza-pytan-covid.netlify.com',
    ['react', 'redux', 'firebase'],
    covid
  ),
  Project(
    'OFF Museum',
    'Strona muzeum sztuki',
    'Strona muzeum sztuki nowoczesnej zrobiona w HTML, CSS i czystym javascript.',
    'https://github.com/radziminski/off-museum',
    'https://radziminski.github.io/off-museum',
    ['html', 'css'],
    offMuseum
  ),
  Project(
    'Collab Finder',
    'Aplikacja łącząca producentów muzycznych',
    'Aplikacja inspirowana mediami społecznościowymi pozwalająca muzykom znajdowanie innych producentów w celu wspólnej współpracy. Zbudowana przy pomocy biblioteki Express i bazy danych MongoDB. Frontent w produkcji.',
    'https://github.com/radziminski/collab-finder',
    '',
    ['react', 'redux', 'nodejs', 'mongodb'],
    null
  )
];

export default projects;
