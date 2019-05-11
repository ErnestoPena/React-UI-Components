import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
       <div className="banner_wrapper"> 
        <div className="spacer"></div>   
        <div className="card_banner">
           <img className="big_img" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="React"/>
        </div>
       </div> 
    )
}

export default CardBanner;