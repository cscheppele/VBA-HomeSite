import styles from '../styles/Contact.module.css';

function Contact () {
    return (
        <div id="contact" className={styles.main}>
            <div className={styles.contactBlock}>
            <h3>Contact Us</h3>
            <div>info@volleyballaustin.com</div>
            </div>
            <div className={styles.followBlock}>
            <h3>Follow Us</h3>
            <a><img/></a>
            <a><img/></a>
            <a><img/></a>
            </div>
            <div className={styles.siteInfoBlock}>
                various update information about the site.
            </div>
        </div>
    )
}

export default Contact;