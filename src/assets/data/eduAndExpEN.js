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
    'Diamond seller level with over 50 sold tracks. Self-made end-to-end production process, from composing, through mixing to mastering. Producing various electronic and pop genres, with recent focus on Future Bass, Techno and Hardstyle.'
  ),
  Experience(
    2017,
    2021,
    'Bachelor in Computer Science',
    'Faculty of Electronics and Information Technology at Warsaw University of Technology. Rector\'s scholarship for outstanding academic achievements throughout whole duration of my studies. Member of science club "Fiber Team" and of skiing sport club, actively participating in national academic skiing championships.'
  ),
  Experience(
    '07',
    '08.2020',
    'Frontend Developer Intern at Swing Dev',
    `Creating React application for GreenLock - website for managing SSL certificates and controlling their expiration date. During this internship I have learned a lot about frontend & backend architecture, Typescript, best practices, optimization, design patterns and clean code principles.`
  ),
  Experience(
    '10.2020',
    'now',
    'Flutter Developer in JKF Studio',
    'Creating mobile applications with flutter for one of the biggest companies in Poland.'
  )
];
export default expList;
