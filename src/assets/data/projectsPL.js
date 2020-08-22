/* eslint-disable */
function Project(
  title,
  subTitle,
  description,
  githubLink,
  liveLink,
  stack = []
) {
  return {
    title,
    subTitle,
    description,
    githubLink,
    liveLink,
    stack
  };
}

const projects = [
  Project(
    'Sortify',
    'Animacje algorytmów sortujących',
    "Aplikacja internetowa prezentująca animacje różnych algorytmów sortujących. Używa zawaaansowanego asynchronicznego javascript'a do dokłądnego synchronizowania animacji.",
    'https://github.com/radziminski/sortify',
    'https://radziminski.github.io/sortify',
    ['html', 'css', 'js']
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
    ['html', 'css']
  ),
  Project(
    'Vienna Residence',
    'Strona hotelu',
    'Strona hotelu Vienna Residence z kompletnym systemem rezerwacji. [backend w produkcji]',
    'https://github.com/radziminski/vienna-residence',
    'https://radziminski.github.io/vienna-residence',
    ['react', 'nodejs', 'mongodb']
  ),
  Project(
    'Collab Finder',
    'Aplikacja łącząca producentów muzycznych',
    'Aplikacja inspirowana mediami społecznościowymi pozwalająca muzykom znajdowanie innych producentów w celu wspólnej współpracy.',
    'https://github.com/radziminski/collab-finder',
    '',
    ['react', 'redux', 'nodejs', 'mongodb']
  )
];

export default projects;
