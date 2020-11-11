import React from 'react';

import './about.styles.scss';

import Header from '../../components/header/header.component.jsx';
import LowerNav from '../../components/lower-nav/lower-nav.components';

const About = () => (
    <div className='about'>
        <Header />
        <h1>ABOUT</h1>
        <div className='nav-container'>
            <LowerNav />
        </div>
    </div>
);

export default About;