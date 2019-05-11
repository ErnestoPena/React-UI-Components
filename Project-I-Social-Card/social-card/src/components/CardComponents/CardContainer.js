import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from '../CardComponents/CardContent';
import FooterComponent from '../FooterComponents/Footer';

const CardContainer = () => {
    return (
        <div className="big_container">
            <HeaderContainer/>
            <CardBanner/>
            <CardContent/>
            <FooterComponent/>
        </div>
    )
}

export default CardContainer;
