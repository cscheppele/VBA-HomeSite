import styles from '../styles/BoardMember.module.css';
const placeholder:string = '/hero-placeholder.jpeg'; 


export default function BoardMember (/**membername */) {
    return (
        <div className={styles.main}>
            <div className={styles.memberBlock}>
                <img className={styles.boardMemberPhoto} src={placeholder}/>
                <h4 className={styles.boardMemberName}>Board Member Name</h4>
                {/*possibly something for an on hover to include their questionaire*/}
            </div>
        </div>
    )
}