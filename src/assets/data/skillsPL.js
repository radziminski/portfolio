/* eslint-disable quotes */
/* eslint-disable max-len */

import reactIcon from '@iconify/icons-fa-brands/react';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import css3Icon from '@iconify/icons-simple-icons/html5';
import html5Icon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-fa-brands/sass';
import nodejsIcon from '@iconify/icons-fa-brands/node';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import firebaseIcon from '@iconify/icons-simple-icons/firebase';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import postgresIcon from '@iconify/icons-simple-icons/postgresql';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import cIcon from '@iconify/icons-file-icons/c';
import assemblyIcon from '@iconify/icons-file-icons/assembly-intel';
import pythonIcon from '@iconify/icons-fa-brands/python';
import shellIcon from '@iconify/icons-mdi/bash';
import gitIcon from '@iconify/icons-fa-brands/git-alt';
import figmaIcon from '@iconify/icons-fa-brands/figma';
import flutterIcon from '@iconify/icons-file-icons/flutter';

function Skill(title, description, type, icon, scaleFactor = 1.0) {
  return {
    title,
    description,
    type,
    icon,
    scaleFactor
  };
}

export const main = [
  Skill(
    'HTML',
    'Podstawa każdej strony internetowej - uważam, że dobrze zaprojektowany i semantyczny HTML powinien być punktem wyjściowym do każdego poważnego projektu internetowego.',
    'web',
    html5Icon,
    true
  ),
  Skill(
    'CSS',
    'Moja ulubiona technologia stylowania interfejsów użytkownika. Bardzo dobra znajomość CSS3 pozwala mi na szybkie tworzenie nawet najbardziej skomplikowanych projektów. ',
    'web',
    css3Icon,
    true,
    0.9
  ),
  Skill(
    'Javascript',
    "Język programowania w którym czuję się najlepiej. Świetna znajomość Javascript'u ES8+ i jego zawaansowanych konceptów (takich jak asynchroniczność, 'closures' , czy pętli zdarzeń) pozwala mi na rozwiązanie prawie każdego problemu jaki napotkam.",
    'web',
    javascriptIcon,
    true
  ),
  Skill(
    'Typescript',
    "Mój ulubiony i najczęściej używany język programowania. W połączeniu z React'em i Node'em daje mi podstawy do tworzenia najbardziej wymagających projektów.",
    'web',
    typescriptIcon,
    true
  ),
  Skill(
    'SCSS',
    "Dobra znajomość preprocesora SASS sprawia, że stylowanie elementów jest dla mnie szybkie i przyjemne. Pozwala mi na implementację różnorodnych projektów, w czasie który nie byłby osiągalny z czystym CSS'em.",
    'web',
    sassIcon,
    true,
    0.9
  ),
  Skill(
    'React',
    "Moja ulubiona frontend'owa biblioteka. Zawansowana znajomość Reacta (hooki, wirtualny DOM, memoizacja i więcej) w połączeniu z powiązanymi technologiami (styled components/css modules, Redux, Axios itd.) pozwala mi na tworzenie czystych, zoptymalizowanych i skalowalnych aplikacji internetowych.",
    'web',
    reactIcon,
    true
  ),
  Skill(
    'Redux',
    'Najczęściej używana przeze mnie biblioteka zarządzania stanem aplikacji. Mimo, że wymaga napisania większej ilości kodu niż w przypadku react-context czy MobX, jest i tak moją ulubioną, dzięki uporządkowanej i skalowalnej architekturze na której bazuje.',
    'web',
    reduxIcon,
    true
  ),
  Skill(
    'Flutter',
    'Jedna z moich ulubionych technologi i zdecydowanie najczęściej przeze mnie używana do tworzenia aplikacji mobilnych. Ogromna ilość wbudowanych komponentów i intuicyjna natura pozwala na tworzenie różnorodnych między-platformowych aplikacji o prawdziwie natywnym charakterze.',
    'web',
    flutterIcon,
    true
  ),
  Skill(
    'Node',
    "Po pracy z takimi technologiami jak .NET, Spring Boot, czy Django, Node jest zdecydowanie moją ulubioną backend'ową technologią. Nie tylko używa mojego ulubionego języka (JS/TS), ale sprawia też że produkcja interfejsów REST jest dla mnie szybka i intuicyjna.",
    'web',
    nodejsIcon,
    true
  ),
  Skill(
    'MongoDB',
    "Jedna z moich ulubionych w użyciu baz danych, jeśli chodzi o pracę z Node - dzięki strukturze danych podobnej do Javascript'owych obiektów, jej działanie jest bardzo intuicyjne.",
    'web',
    mongodbIcon,
    true,
    0.95
  ),
  Skill(
    'SQL',
    'Relacyjne bazy danych były jednym z fundamentalych konceptów z którym wieloktornie się spotkałem podczas moich studiów. Używałem baz SQL (głównie PostgreSQL) w wielu projektach komercyjnych i akademickich nad którymi pracowałem.',
    'web',
    postgresIcon,
    true,
    0.95
  ),
  Skill(
    'Firebase',
    "Używałem firebase, kiedy tylko potrzebowałem szybkiego i niezawodnego sposobu autoryzacji i przechowywania danych bez tworzenia calego serwera backend'owego.",
    'web',
    firebaseIcon,
    true,
    0.92
  ),
  Skill(
    'Figma',
    'Przed rozpoczęciem każdego projektu, lubię rozplanować moją wizję interfejsu użytkownika, gdyż ułatwia i usprawnia to proces przyszłej implementacji. Do tego używam programu Figma, w którym potrafię szybko zwizualizować moje pomysły.',
    'other',
    figmaIcon
  ),
  Skill(
    'C, C++',
    'Język w którym stawiałem swoje pierwsze kroki w świecie oprogramowania - napisałem swój pierwszy program "Hello World" w wieku 13 lat. Znajomośc języka przydała się również podczas pisania rozszerzonej matury z matematyki. C oraz C++ były też głównymi językami, których używałem podczas moich studiów - uczyłem się w nich algorytmów, struktur danych, programowania mikrokontrolerów, czy wielowątkowości.',
    'other',
    cIcon
  ),
  Skill(
    'Python',
    'Mimo, że nigdy nie używałem Pythona podczas pracy nad komercyjnnymi projektami, często używałem go w potrzebie przetworzenia danych, czy zawaansowanych obliczeń. Uczyłem się w nim również podstaw uczenia maszynowego. Miałem okazję również pracować z bibliotekami FastAPI i Django.',
    'other',
    pythonIcon
  ),
  Skill(
    'x86 & MIPS assembly',
    'Jedynm z komponentów moich studiów była architektura komputerów. Dowiedziałem się jak zbudowane są komputery od zera - uczyłem się o potokach, superskalarach, stronicowaniu itd. Jako projekt na laboratoria, moim zadaniem była implementacja dwóch projektów w asemblerach MIPS oraz x86 (x86-64). Pierwszy słyżył do usuwania komentarzy z plików źródłowych, a drugi do tworzenia odbicia lustrzanego obrazka BMP.',
    'other',
    assemblyIcon
  ),
  Skill(
    'Shell',
    'Podczas przedmiotu "Systemy operayjne", poznałem podstawy systemów Linux, w tym, komendy terminalu oraz pisania skryptów Shell.',
    'other',
    shellIcon
  ),
  Skill(
    'Git',
    'Podczas pracy nad komercyjnymi i akademickimi projektami zawsze używałem systemu kontroli wersji git - mam dobrą znajomość konceptów takich jak commit, branches, merges or pull requests - generalnie wiem wszystko, co jest niezbędne do wspólnej pracy w większych zespołach.',
    'other',
    gitIcon
  )
];

export const side = [
  'github',
  'webpack',
  'npm',
  'c#',
  'ASP.NET',
  'regex',
  'QT',
  '8051 assembly',
  'Matlab',
  'FL Studio',
  'Pro Tools',
  'Adobe Photoshop',
  'Adobe After Effects'
];
