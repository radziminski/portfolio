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
    'I Społeczne Liceum Ogólnokształcące w Warszawie', 
    'Profil matematyczno-informatyczny, matura rozszerzona z matematyki, informatyki i angielskiego.'
  ),
  Experience(
    2015,
    'teraz',
    'Producent muzyczny w House Of Tracks',
    'Diamentowy poziom sprzedaży z ponad 50 sprzedanymi utworami.'
  ),
  Experience(
    2017,
    'teraz',
    'Infomratyczne Studia Inżynierskie',
    `Wydział Elektroniki i Technik Informacyjnych Politechniki Warszawskiej. 
    Stypendium rektora za wybitne osiągnięcia w nauce oraz działalność naukową i sportową.`
  ),
  Experience('07', '08.2020', 'Stażysta Frontend w Swing Development', 
  `Współtworzenie frontend'u aplikacji GreenLock służącej do zarządzania certyfikatami SSL. 
  Serwis tworzony był przy pomocy biblioteki React, w języku Typescript`)
];
export default expList;
