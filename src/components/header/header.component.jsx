import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='links-container'>
            <Link className='link' to='/about'>
                ABOUT
            </Link>
            <Link className='link' to='/projects'>
                PROJECTS
            </Link>
            <Link className='link' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>  
);

export default Header;
