/* eslint-disable quotes */
/* eslint-disable max-len */
import reactIcon from '@iconify/icons-fa-brands/react';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import html5Icon from '@iconify/icons-simple-icons/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-fa-brands/sass';
import nodejsIcon from '@iconify/icons-fa-brands/node';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import firebaseIcon from '@iconify/icons-simple-icons/firebase';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import postgresIcon from '@iconify/icons-simple-icons/postgresql';
import cIcon from '@iconify/icons-file-icons/c';
import flutterIcon from '@iconify/icons-file-icons/flutter';
import assemblyIcon from '@iconify/icons-file-icons/assembly-intel';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import pythonIcon from '@iconify/icons-fa-brands/python';
import shellIcon from '@iconify/icons-mdi/bash';
import gitIcon from '@iconify/icons-fa-brands/git-alt';
import figmaIcon from '@iconify/icons-fa-brands/figma';

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
    // eslint-disable-next-line max-len
    'The base of the whole web development. I believe that proper semantic HTML5 structure should be a starting point for building every well-designed website.',
    'web',
    html5Icon,
    true
  ),
  Skill(
    'CSS',
    // eslint-disable-next-line max-len
    'CSS is by far my favorite UI styling technology. Strong CSS3 knowledge allows me to quickly implement most complicated designs.',
    'web',
    css3Icon,
    true,
    0.9
  ),
  Skill(
    'Javascript',
    'Programming language I feel the best at. Strong knowledge of ES8+ Javascript and its advanced concepts (including Ajax, closures, event loop and more) gives me ability to solve almost any problem I face.',
    'web',
    javascriptIcon,
    true
  ),
  Skill(
    'Typescript',
    'My favorite programming language and definitely the one I most frequently use. In combination with React and Node it gives me the foundation to develop any web application I can imagine.',
    'web',
    typescriptIcon,
    true
  ),
  Skill(
    'SCSS',
    'Good knowledge of SASS preprocessor makes CSS styling much quicker and fun for me. It allows me to bring to life various designs in time that was not achievable with vanilla CSS.',
    'web',
    sassIcon,
    true,
    0.9
  ),
  Skill(
    'React',
    'My favorite frontend library. Strong React knowledge (hooks, virtual DOM, memoization and more) in combination with related packages (styled components/css modules, Redux, Axios, RxJs etc.) allows me to create large, optimized and scalable web applications.',
    'web',
    reactIcon,
    true
  ),
  Skill(
    'Redux',
    'My most frequently used global state management pattern. Although it requires more boilerplate code than react-context or MobX, its still my favorite one since it creates well structured and error-free code architecture in the end.',
    'web',
    reduxIcon,
    true
  ),
  Skill(
    'Flutter',
    'One of my favorite technologies and definitely my most frequently used mobile framework. Countless built-in widgets and simple and intuitive use allowed me to create various cross platform applications with fully native feel.',
    'web',
    flutterIcon,
    true
  ),
  Skill(
    'Node',
    "After using .NET, Spring Boot or Django, Node is by far my favorite backend technology. Not only it uses my favorite language (JS/TS), but it also makes creating REST Api's quick and intuitive for me.",
    'web',
    nodejsIcon,
    true
  ),
  Skill(
    'MongoDB',
    'My favorite database when it comes to working with Node, thanks to its similarity in structure to javascript objects.',
    'web',
    mongodbIcon,
    true,
    0.95
  ),
  Skill(
    'SQL',
    'Relational databases were one of the core components of my studies - I have learned a lot about database modelling, advanced querying, joins etc. I have used SQL databases (mainly PostgreSQL) in many of my academic and individual projects.',
    'web',
    postgresIcon,
    true,
    0.95
  ),
  Skill(
    'Firebase',
    'I used firebase every time I needed to use very simple data storage for my website, or implement fast and reliable authentication without need of implementing whole backend server.',
    'web',
    firebaseIcon,
    true,
    0.92
  ),
  Skill(
    'Figma',
    'Before starting a new project I like to briefly plan and design the UIs of it beforehand, since it makes the development process easier and faster. For that purpose I love using Figma - it allows me to quickly visualize my ideas.',
    'other',
    figmaIcon
  ),
  Skill(
    'C, C++',
    'Language in which I\'ve made my first steps in software world - I wrote my first "hello world" program at the age of 13. Then, I used it for writing my high school exam. C and C++ were also the main languages I\'ve used during my studies - I used them for learning algorithms and data structures, programming microcontrollers or studying multithreaded programming.',
    'other',
    cIcon
  ),
  Skill(
    'Python',
    "Although I've never built any commercial projects with python I have often used it for data processing or some advanced calculations (which I often needed during my studies). I've also used it for learning the very basics of machine learning and data science. I had also a chance to work with its server frameworks like FastAPI or Django.",
    'other',
    pythonIcon
  ),
  Skill(
    'x86 & MIPS assembly',
    "One of the components of my studies where Computer Architecture course. I've discovered how computers are constructed from scratch - I've learnt about processor pipelines, superscalars, hazards, penalties, caching or paging. As a laboratory project's I were supposed to implement two programs in MIPS and x86 (and x86-64) assemblies. First one was about changing non-ascii characters into escape sequences in files, while second was about mirroring bmp images. ",
    'other',
    assemblyIcon
  ),
  Skill(
    'Shell',
    'I have learned Linux fundamentals during the Operation Systems course during my studies. It also included basics of linux terminal, shell programming and processes scheduling.',
    'other',
    shellIcon
  ),
  Skill(
    'Git',
    "During my commercial and academic experience I've always used git version control system - I am familiar with concepts like commits, branches, merges or pull requests - generally on everything that is essential for successful development in larger teams.",
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
