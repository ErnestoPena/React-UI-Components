import React from 'react';
import './Footer.css';
import my_hover_event from './footerevents'

import { FiRefreshCw } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { MdChatBubbleOutline } from 'react-icons/md'

const FooterComponent = () => {
   
  const my_click_event1 = () => {
        console.log('click')
    }

    return (
        <div className="footer_class">
           <div onClick= {my_click_event1} className="footer_element">
             <MdChatBubbleOutline />
           </div> 
           <div onClick= {my_click_event1} className="footer_element">
             <FiRefreshCw />
           </div>
           <div onClick= {my_click_event1} className="footer_element">
             <FiHeart />
           </div>
           <div onClick= {my_click_event1} className="footer_element">
             <FiMail />
           </div>
        </div>
    )
}

export default FooterComponent;