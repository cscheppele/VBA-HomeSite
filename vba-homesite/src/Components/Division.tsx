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

export default function Division (currentDiv:string) {
    
    return (
        <div>
            <div>placeholder for team photo</div>
            <h4>season winner team name</h4>
            <h5>season winner player names</h5>


        </div>
    )
}