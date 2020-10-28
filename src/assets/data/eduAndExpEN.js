/* eslint-disable */
function Experience(start, end, title, description) {
  return {
    start,
    end,
    title,
    description
  };
}

const expList = [
  Experience(
    2014,
    2017,
    'Ist general high school in Warsaw',
    'Mathematical / IT profile, with final exam written in mathematics, information technology and english. '
  ),
  Experience(
    2015,
    'now',
    'Music producer at House Of Tracks',
    'Diamond seller level with over 50 sold tracks.'
  ),
  Experience(
    2017,
    'now',
    'Bachelor in Computer Science',
    'Faculty of Electronics and Information Technology at Warsaw University of Technology'
  ),
  Experience(
    '07',
    '08.2020',
    'Frontend developer intern in Swing Development',
    `Creating frontend for GreenLock - 
    web application for managing  SSL certificates and controlling their expiration date. App was 
    made in React library, with usage of (mainly) Typescript, Redux and Styled Components. During this
    internship I have learned a lot about frontend & backend architecture, best practices and clean code
    principles.`
  )
];
export default expList;
