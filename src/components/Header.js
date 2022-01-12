import React from 'react';
import './Header.css';

const Header = () => {
    return <div id='header'>
        <div  className='title'>
            <h1>VIEW FROM MARS</h1>
        </div>
        <div className='subtitle'>images from Curiosity rover courtesy of NASA's Mars Rover Photos API</div>
    </div>
};

export default Header;