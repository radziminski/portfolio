function Experiance(start, end, description) {
    return {
        start,
        end,
        description,
    };
}

const expList = [
    Experiance(2014, 2017, 'I Społeczne Liceum Ogólnokształcące, profil matematyczno-informatyczny'),
    Experiance(2015, 'now', 'Music producer (with Diamond Seller level) at House Of Tracks'),
    Experiance(
        2017,
        'now',
        'Bachelor Computer Science Studies at Faculty of Electronics and Information Technology at Warsaw University of Technology'
    ),
    Experiance(2019, 'now', 'Freelance full-stack web developer'),
];
export default expList;
