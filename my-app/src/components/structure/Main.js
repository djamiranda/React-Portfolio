import { Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutMe from '../../pages/AboutMe';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<AboutMe />} />
            </Routes>
        </main>
    );
};

export default Main;