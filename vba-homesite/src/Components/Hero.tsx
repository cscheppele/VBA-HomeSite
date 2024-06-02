import styles from '../styles/Hero.module.css';

function Hero () {

    return (
        <div className={styles.main}>
            <div className={styles.heroPic}>this is a place holder for a photo</div>
            <p className={styles.mission}>Volleyball Austin offers the Central Texas lesbian, gay, bisexual, transgender (LGBT+) community and our straight allies the opportunity to experience and enjoy volleyball in an inclusive and affirming environment.</p>
        </div>
    )

}

export default Hero;