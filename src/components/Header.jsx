import React from 'react';
import photo from '../assets/wedding_photo.jpg';

function Header() {
    return (
        <header className="header">
            <img src={photo} alt="Wedding" className="wedding-photo" />
            <h1>조정욱 ♥ 장다연의 결혼식</h1>
        </header>
    );
}

export default Header;
