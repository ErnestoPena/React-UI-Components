import React from 'react';
import './Header.css';
import './HeaderContent.js';
import HeaderTitle from './HeaderTitle'; 
import Logo from './ImageThumbnail';


const HeaderContainer = () => {
    return (
        
        <div className="header_container">
        <div><Logo/></div>    
        <HeaderTitle/>
        </div>
        
    )
}

export default HeaderContainer;