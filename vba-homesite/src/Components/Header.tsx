import '../Styling/Header.module.css';
import React from 'react';

function Header () {
    return(
        <div className="Main">
            <img src="../public/VBA-header-logo.jpeg"/>
            <div>Home</div>
            <div>Awards</div>
            <div>Calendar</div>
            <div>Board</div>
            <div>Contact</div>
        </div>
    )
};

export default Header;