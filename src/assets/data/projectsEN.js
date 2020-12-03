import offMuseum from 'assets/img/off_museum.jpg';
import sortify from 'assets/img/sortify.jpg';
import covid from 'assets/img/covid.jpg';

/* eslint-disable */
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
    'Sorting algorithms visulaizer',
    'Web application visualizing different sorting algorithms. It uses asynchronous javascript for animation synchronization. It provides various customization possibilities and can visualize different sorting algorithms, mainly: bubble, select, insert, quick and merge sort.',
    'https://github.com/radziminski/sortify',
    'https://radziminski.github.io/sortify',
    ['html', 'css', 'js'],
    sortify
  ),
  Project(
    'Covid FAQ',
    'FAQ based portal',
    'Website made for the needs of voluntary service, which helped Polish medical enviroment during the times of coronavirus outbreak. It was used as a center of FAQ for hospital staff. It consist of full authentication with different roles - every user is allowed to propose the question, but only reviewers can accept them and add them to the public list.',
    'https://github.com/radziminski/baza-pytan-react',
    'https://baza-pytan-covid.netlify.com',
    ['react', 'redux', 'firebase'],
    covid
  ),
  Project(
    'OFF Museum',
    'Art Museum landing page',
    'Landing page for modern art museum, presenting its new exhibitions, payment plans and general information. Built with HTML, CSS (with SCSS preprocessor) and vanilla javascript.',
    'https://github.com/radziminski/off-museum',
    'https://radziminski.github.io/off-museum',
    ['html', 'css'],
    offMuseum
  ),
  Project(
    'Collab Finder',
    'Web App connecting music producers',
    'Social-network based website where music producers can find others and collaborate on their music. [frontend in development]. Built in Express (Node) with MongoDB database. Frontend in development.',
    'https://github.com/radziminski/collab-finder',
    '',
    ['react', 'redux', 'nodejs', 'mongodb'],
    null
  )
];

export default projects;
