import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './styles/Comment.module.css';

export function Comment() {
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
                                It's been about 2h
                            </time>
                        </div>
                        <button title="Delete Comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> Muito bom seu portifa! </p>
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
