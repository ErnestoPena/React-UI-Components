import React from 'react';
import './Footer.css';
import { my_footer_hover } from './footerevents.js';

import { FiRefreshCw } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { MdChatBubbleOutline } from 'react-icons/md'

const FooterComponent = () => {
    return (
        <div className="footer_class">
           <div className="footer_element">
             <MdChatBubbleOutline />
           </div> 
           <div className="footer_element">
             <FiRefreshCw />
           </div>
           <div className="footer_element">
             <FiHeart />
           </div>
           <div className="footer_element">
             <FiMail />
           </div>
        </div>
    )
}

export default FooterComponent;