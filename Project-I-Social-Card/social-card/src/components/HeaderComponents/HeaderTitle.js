import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="title_div">
        <h4 className="h1_class">Lambda School</h4>
       <HeaderUser/>
        </div>
    )
}

const HeaderUser = () => {
    var my_user = '@LambdaSchool Jan26';
    return (
        <p className="user">{my_user}</p>
    )
}

export default HeaderTitle;
