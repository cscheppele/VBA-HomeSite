import styles from '../styles/Winners.module.css';
import DivisionPanel from './Division';

export default function Winners () {

    const divisions:string[] = ['Elite','Advanced','Competitive','Intermediate','Social'];
    let currentDiv: string = divisions[0];
    //this should be some sort of state tracking for current division?
    //or should all of them be loaded in and you can just scroll through them?
    //function to rotate currentDiv through the the divisions array?
    //or am I just changing the position of each one?
    function changeDivision() {
        // if(){
        //     if(divisions.indexOf(currentDiv) == 0) {
        //         currentDiv = divisions[divisions.length - 1];
        //     } else {
        //     currentDiv = divisions[divisions.indexOf(currentDiv)-1]
        //     }
        // } else {
        //     if(divisions.indexOf(currentDiv) == divisions.length - 1) {
        //         currentDiv = divisions[0];
        //     } else {
        //     currentDiv = divisions[divisions.indexOf(currentDiv)+1]
        //     }
        // }
    }
    return (
        <div className={styles.main}>
            {/*left arrow button for on click functionality*/}
            <DivisionPanel/>
            {/**Right arrow button for an on click functionality */}
            {/*need to research the forEach way of displaying an array again */}
            {/* <DivisionPanel currentDiv={currentDiv}/> */}
        </div>
    )
}