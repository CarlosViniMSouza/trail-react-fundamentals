import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './styles/Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {

        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/CarlosViniMSouza.png' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Souza</strong>
                            <time
                                title='03 October at 10:15h'
                                dateTime='2022-10-11 09:15:20'>
                                Há cerca de 2h
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Delete Comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Applaud <span>10</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
