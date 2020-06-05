import React, { useState, useEffect } from 'react';
import './assets/sass/main.scss';
import Header from './views/Header';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './views/Footer';
import Skills from './views/Skills';
import Projects from './views/Portfolio';
import Experience from './views/Experience';
import NavBar from './components/NavBar';
function App() {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');

    useEffect(() => {
        setTimeout(() => {
            const loader = document.querySelector('.loader');
            loader.classList.add('loader--hidden');

            const app = document.querySelector('.App');
            app.classList.add('App--show');
        }, 50);
    }, []);

    const toggleLanguage = () => {
        if (language === 'EN') {
            localStorage.setItem('language', 'PL');
            return setLanguage('PL');
        }
        localStorage.setItem('language', 'EN');
        setLanguage('EN');
    };

    return (
        <div className="App">
            <NavBar language={language} toggleLanguage={toggleLanguage} />
            <main>
                <Header language={language} />
                <About language={language} />
                <Skills language={language} />
                <Projects language={language} />
                <Experience language={language} />
                <Contact language={language} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
