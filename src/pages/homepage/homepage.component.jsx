import React from 'react';

import Header from '../../components/header/header.component';
import MainContent from '../../components/main-content/main-content.components';

//import bg from '/Users/kevingoodenough/GIT/react-website/public/img/splash.png';

import './homepage.styles.scss';

var bg = '/Users/kevingoodenough/GIT/react-website/public/img/splash.png'; 

const HomePage = () => (
    <div className='homepage'>
        <div 
            className='background-image'
            styles={{ backgroundImage: './splash.png' }}
        >
            <p> </p>
        </div>
        <div className='content-container'> 
            <MainContent />
        </div>
    </div>
);

export default HomePage;

//https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_960_720.jpg