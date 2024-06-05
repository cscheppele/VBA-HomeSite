import styles from '../styles/Board.module.css';
import BoardMember from './BoardMember';

function Board () {
    //some function to go through all of the board members, their names, and a quote
    return (
        <div className={styles.main}>
            <h4 className={styles.header}>Meet Our Board</h4>
            <div className={styles.boardMemberBlock}>
                {/*the actual function for cycling through board members*/}
                <BoardMember/>
                <BoardMember/>
                <BoardMember/>
                <BoardMember/>
                <BoardMember/>
                <BoardMember/>
            </div>
        </div>
    )
}

export default Board;