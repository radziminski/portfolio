function Experience(start, end, description) {
    return {
        start,
        end,
        description,
    };
}

const expList = [
    Experience(2014, 2017, 'I Społeczne Liceum Ogólnokształcące w Warszawie, profil matematyczno-informatyczny'),
    Experience(2015, 'teraz', 'Producent muzyczny (z diamentowym poziomem sprzedaży) w House Of Tracks'),
    Experience(
        2017,
        'teraz',
        'Infomratyczne studia inżynierskie na Wydziale Elektroniki i Technik Informacyjnych Politechniki Warszawskiej'
    ),
    Experience(2019, 'teraz', 'Niezależny deweloper aplikacji internetowych'),
];
export default expList;