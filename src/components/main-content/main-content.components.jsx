import React from 'react';
import { Link } from 'react-router-dom';

import './main-content.styles.scss';

const MainContent = () => (
    <div className='background-gradient'>
        <div className='main-content'>
            <div className='box1 nav-arrows'>
                <svg
                    className='arrow-prev'
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    width="24"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
                </svg>
            </div>
            <div className='box2'>
                <div className='name'>
                    <p>Kevin Goodenough</p>
                </div>
                <div className='title'>
                    <p>SOFTWARE ENGINEER</p>
                </div> 
            </div> 
            <div className='box3 nav-arrows'>
                <Link className='link' to='/about'>
                    <svg 
                        className='arrow-next nav-arrows'
                        xmlns="http://www.w3.org/2000/svg" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        width="24"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                    </svg>
                </Link>
                
            </div>
        </div>
    </div>
     
);

export default MainContent;