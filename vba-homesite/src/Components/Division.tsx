import styles from '../styles/Division.module.css';
interface CurrentDivProps {
    winningTeamPhotoUrl: string;
    winningTeamName: string;
    WinningTeamPlayerNames: string[];
    bestX: string;
    bestY: string;
    bestZ: string;
    mostX: string;
    mostY: string;
    mostZ: string;
}

export default function Division (/*currentDiv:string*/) {
    //need a function to track state and swap the currentDiv accordingly.
    return (
        <div id="winners" className={styles.main}>
            <div className={styles.winnerBlock}>
                <img className={styles.teamPhoto} src='/hero-placeholder.jpeg'/>
                <h4>season winner team name</h4>
                <h5>season winner player names</h5>
            </div>
            <div className={styles.categoryBlock}>
                <h4>category 1</h4>
                <h5>category 1 winner</h5>
                <h4>category 2</h4>
                <h5>category 2 winner</h5>
                <h4>category 3</h4>
                <h5>category 3 winner</h5>
            </div>
        </div>
    )
}