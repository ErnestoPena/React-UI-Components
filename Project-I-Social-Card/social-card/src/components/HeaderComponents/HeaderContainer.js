import React from 'react';
import './Header.css';
import './HeaderContent.js';
import HeaderTitle from './HeaderTitle'; 
import HeaderContent from './HeaderContent';
import Logo from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header_container">
        <Logo/>
        <HeaderTitle/>
        <HeaderContent/>
        </div>
        
    )
}

export default HeaderContainer;