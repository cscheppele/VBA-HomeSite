import styles from '../styles/Header.module.css';
import React from 'react';

function Header () {
    return(
        <div className={styles.Main}>
            <img src="../public/VBA-header-logo.jpeg"/>
            <div className={styles.Link}>Home</div>
            <div className={styles.Link}>Awards</div>
            <div className={styles.Link}>Calendar</div>
            <div className={styles.Link}>Board</div>
            <div className={styles.Link}>Contact</div>
        </div>
    )
};

export default Header;