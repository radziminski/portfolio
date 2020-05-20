function Experience(start, end, description) {
    return {
        start,
        end,
        description,
    };
}

const expList = [
    Experience(2014, 2017, 'I general secondary school in Warsaw, mathematical / IT profile'),
    Experience(2015, 'now', 'Music producer (with Diamond Seller level) at House Of Tracks'),
    Experience(
        2017,
        'now',
        'Bachelor in Computer Science at Faculty of Electronics and Information Technology at Warsaw University of Technology'
    ),
    Experience(2019, 'now', 'Freelance full-stack web developer'),
];
export default expList;
