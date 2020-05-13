function Project(title, subTitle, description, githubLink, liveLink, stack = []) {
    return {
        title,
        subTitle,
        description,
        githubLink,
        liveLink,
        stack,
    };
}

const projects = [
    Project(
        'Sortify',
        'Sorting algorithms visulaizer',
        'Web application visualizing different sorting algorithms. It uses advanced asynchronous javascript for animation synchronization.',
        'https://github.com/radziminski/sortify',
        'https://radziminski.github.io/sortify',
        ['html', 'css', 'js']
    ),
    Project(
        'Baza Pytan',
        'FAQ based portal',
        'Website made for the needs of polish voluntary service, which helped in medical enviroment in times of coronavirus outbreak.',
        'https://github.com/radziminski/baza-pytan-react',
        'https://baza-pytan-covid.netlify.com',
        ['react', 'redux', 'firebase']
    ),
    Project(
        'OFF Museum',
        'Art Museum landing page',
        'Landing page for modern art museum, built with HTML, CSS and a pinch of javascript.',
        'https://github.com/radziminski/off-museum',
        'https://radziminski.github.io/off-museum',
        ['html', 'css']
    ),
    Project(
        'Vienna Residence',
        'Hotel reservations website',
        'Website of a Vienna Residence hotel with fully working reservations system.',
        'https://github.com/radziminski/vienna-residence',
        'https://radziminski.github.io/vienna-residence',
        ['react', 'nodejs', 'mongodb']
    ),
    Project(
        'Collab Finder',
        'Web App connecting music producers',
        'Social-network based website where music producers can find others and collaborate on their music.',
        'https://github.com/radziminski/vienna-residence',
        'https://radziminski.github.io/vienna-residence',
        ['react', 'redux', 'nodejs', 'mongodb']
    ),
];

export default projects;
