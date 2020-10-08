import reactIcon from '@iconify/icons-fa-brands/react';
import javascriptIcon from '@iconify/icons-ion/logo-javascript';
import html5Icon from '@iconify/icons-fa-brands/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-fa-brands/sass';
import nodejsIcon from '@iconify/icons-fa-brands/node';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import firebaseIcon from '@iconify/icons-simple-icons/firebase';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import postgresIcon from '@iconify/icons-simple-icons/postgresql';
import cIcon from '@iconify/icons-file-icons/c';
import assemblyIcon from '@iconify/icons-file-icons/assembly-intel';
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
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    html5Icon,
    true
  ),
  Skill(
    'CSS',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    css3Icon,
    true,
    0.9
  ),
  Skill(
    'Javascript',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    javascriptIcon,
    true
  ),
  Skill(
    'CSS + SCSS',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    sassIcon,
    true,
    0.9
  ),
  Skill(
    'React',
    'Lorem ipsum dispum Lorem ipsum dispum Lorem ipsum dispum',
    'web',
    reactIcon,
    true
  ),
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
