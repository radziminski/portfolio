import React from 'react';
import './assets/sass/main.scss';

import Header from './views/Header';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './views/Footer';
import Skills from './views/Skills';
import Projects from './views/Portfolio';
import Experiance from './views/Experiance';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Experiance />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
