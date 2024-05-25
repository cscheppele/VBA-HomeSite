import styles from '../styles/Header.module.css';
import React from 'react';

function Header () {
    return(
        <div className={styles.Main}>
            <img className={styles.Logo} src="/VBA-header-logo.jpeg"/>
            <div className={styles.LinkBox}>
                <div className={styles.Link}>Home</div>
                <div className={styles.Link}>Awards</div>
                <div className={styles.Link}>Calendar</div>
                <div className={styles.Link}>Board</div>
                <div className={styles.Link}>Contact</div>
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