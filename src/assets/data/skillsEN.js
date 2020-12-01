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
    'The base of the whole web development. I believe that proper semantic HTML structure should be a starting point for building every website.',
    'web',
    html5Icon,
    true
  ),
  Skill(
    'CSS',
    // eslint-disable-next-line max-len
    'After working with several different frontend frameworks including QT and JUCE, CSS uses by far my favorite UI styling pattern. Strong CSS3 knowledge allows me to quickly implement most complicated designs.',
    'web',
    css3Icon,
    true,
    0.9
  ),
  Skill(
    'Javascript',
    'Programming language I am the best at. After years of programming in C++, learning Javascript opened whole new world for me. Strong knowledge of ES2018+ Javascript gives me ability to solve almost any problem I face.',
    'web',
    javascriptIcon,
    true
  ),
  Skill(
    'Typescript',
    "Together with Dart, my favorite programming language. With experience in other strongly typed languages, transition from Javascript was quick and easy for me and I know I'm never coming back. In combination with React, it gives me foundation to develop any web application I can imagine in most scalable way. ",
    'web',
    typescriptIcon,
    true
  ),
  Skill(
    'SCSS',
    'Good knowledge of SASS preprocessor makes CSS styling way',
    'web',
    sassIcon,
    true,
    0.9
  ),
  Skill('React', 'My favorite frontend library. ', 'web', reactIcon, true),
  Skill(
    'Redux',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    reduxIcon,
    true
  ),
  Skill(
    'Node',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    nodejsIcon,
    true
  ),
  Skill(
    'MongoDB',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    mongodbIcon,
    true,
    0.95
  ),
  Skill(
    'SQL',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    postgresIcon,
    true,
    0.95
  ),
  Skill(
    'Firebase',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    firebaseIcon,
    true,
    0.92
  ),
  Skill(
    'Figma',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'other',
    figmaIcon
  ),
  Skill(
    'C, C++',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'other',
    cIcon
  ),
  Skill(
    'Python',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'other',
    pythonIcon
  ),
  Skill(
    'x86 & MIPS assembly',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'other',
    assemblyIcon
  ),
  Skill(
    'Shell',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'other',
    shellIcon
  ),
  Skill(
    'Git',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
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
