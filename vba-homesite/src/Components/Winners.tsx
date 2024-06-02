import styles from '../styles/Winners.module.css';
import DivisionPanel from './Division';

export default function Winners () {

    const divisions:string[] = ['Elite','Advanced','Competitive','Intermediate','Social'];
    let currentDiv: string = divisions[0];
    //this should be some sort of state tracking for current division?
    //or should all of them be loaded in and you can just scroll through them?
    //function to rotate currentDiv through the the divisions array?
    //or am I just changing the position of each one?
    return (
        <div className={styles.main}>
            <div>this is a panel specifically for the division winners.  Panel designed, just not placed here yet, deciding on scroll behavior
            </div>
            {/*need to research the forEach way of displaying an array again */}
            {/* <DivisionPanel currentDiv={currentDiv}/> */}
        </div>
    )
}