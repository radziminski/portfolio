/* eslint-disable max-len */
/* eslint-disable quotes */
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
    'Diamentowy poziom sprzedaży z ponad 50 sprzedanymi utworami. Tworzenie utworów od kompozycji do masteringu. Produkcja różnorodnych gatunków elektronicznych. '
  ),
  Experience(
    2017,
    'teraz',
    'Informatyczne Studia Inżynierskie',
    `Wydział Elektroniki i Technik Informacyjnych Politechniki Warszawskiej. 
    Stypendium rektora za wybitne osiągnięcia w nauce oraz działalność naukową i sportową. Członek koła naukowego Fiber Team oraz sekcji narciarskiej PW, biorąc aktywny udział w ogólnopolskich zawodach akademickich.`
  ),
  Experience(
    '07',
    '08.2020',
    'Stażysta Frontend w Swing Dev',
    "Współtworzenie serwisu GreenLock - aplikacji służącej do zarządzania certyfikatami SSL oraz do kontrolowania terminu ich wygaśnięcia. Serwis współtworzyłem przy pomocy biblioteki React, w języku Typescript. Podczas stażu nauczyłem się wiele o architekturze oprogramowania, optymalizacji, wzorcach projektowych oraz dobrych praktykach tworzenia aplikacji frontend'owych."
  ),
  Experience(
    '10.2020',
    '02.2021',
    'Flutter Developer w JKF Studio',
    'Tworzenie aplikacji mobilnych w technologii Flutter dla jednej z największych firm w Polsce.'
  ),
  Experience(
    '03.2021',
    'teraz',
    'Młodszy programista Frontend w Swing Dev',
    "Tworzenie aplikacji Frontend'owych dla startup'ów z USA."
  )
];
export default expList;
