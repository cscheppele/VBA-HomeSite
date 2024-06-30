import styles from '../styles/Header.module.css';
import React from 'react';

function Header () {
    return(
        <div className={styles.Main}>
            <img className={styles.Logo} src="/VBA-header-logo.jpeg"/>
            <div className={styles.LinkBox}>
                <a href="#hero" className={styles.Link}>Home</a>
                <a href="#winners" className={styles.Link}>Awards</a>
                <a href="#calendar" className={styles.Link}>Calendar</a>
                <a href="#board" className={styles.Link}>Board</a>
                <a href="#contact" className={styles.Link}>Contact</a>
            </div>
            <div className={styles.SignUpBox}>
                <div>Sign Up</div>
                <div>/</div>
                <div>Sign In</div>
            </div>
        </div>
    )
};

export default Header;