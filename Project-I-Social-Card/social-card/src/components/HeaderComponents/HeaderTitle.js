import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="tittle-wraper">
        <div className="title_div">
        <h4>Lambda School</h4>
        <HeaderUser/>
        </div>
            <HeaderContent/>
        </div>
    )
}

const HeaderUser = () => {
    var months_array = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
    var today_date = new Date();
    var mydate = months_array[today_date.getMonth()]; 
    var my_user = '@LambdaSchool' + "  " + mydate + " " + today_date.getDate();

    return (
        <div>
        <p className="user">{my_user}</p>
        </div>
    )
}

export default HeaderTitle;
