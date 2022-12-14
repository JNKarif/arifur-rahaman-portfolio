import React from 'react';
import Contact from '../../Contact/Contact';

import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            {/* <About></About> */}
            <Projects></Projects>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;