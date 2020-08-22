function Skill(name, percentage, type, featured = false) {
  return {
    name,
    percentage,
    type,
    featured
  };
}

export const mainSkills = [
  Skill('HTML + CSS/SCSS', '90', 'web', true),
  Skill('Javascript', '85', 'web', true),
  //Skill('HTML', '90', 'web', true),
  //Skill('SASS', '90', 'web', true),
  Skill('React + Redux', '75', 'web', true),
  Skill('Node + MongoDB', '60', 'web', true),
  //Skill('MongoDB', '60', 'web', true),
  Skill('Firebase', '70', 'web', true),
  Skill('C, C++', '55', 'other'),
  //Skill('C++', '50', 'other'),
  Skill('x86 & MIPS assembly', '50', 'other'),
  Skill('Python', '40', 'other'),
  Skill('Shell', '20', 'other')
  //Skill('MIPS assembly', '40', 'other'),
  //Skill('Matlab', '40', 'other'),
];

export const sideSkills = [
  'git',
  'github',
  'webpack',
  'npm',
  'django',
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
