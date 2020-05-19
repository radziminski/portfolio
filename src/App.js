import React from 'react';
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
    return (
        <div className="App">
            <NavBar />
            <main>
                <Header />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
