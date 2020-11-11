import React from 'react';

import LowerNav from '../../components/lower-nav/lower-nav.components';

//import bg from '/Users/kevingoodenough/GIT/react-website/public/img/splash.png';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div 
            className='background-image'
            styles={{ backgroundImage: './splash.png' }}
        >
            <p> </p>
        </div>
        <div className='nav-container'> 
            <LowerNav fill="white">
                <div className='name'>
                    <p>Kevin Goodenough</p>
                </div>
                <div className='title'>
                    <p>Software Engineer</p>
                </div>
            </LowerNav>
        </div>
    </div>
);

export default HomePage;

//https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_960_720.jpg