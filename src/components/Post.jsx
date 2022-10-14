import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './styles/Post.module.css';
import ptBR from 'date-fns/locale/pt-br';

import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        1, 2
    ]);

    const pubDataFormat = format(publishedAt, "d LLLL 'as' HH:mm'h'", { locale: ptBR });

    const pubDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, comments.length + 1]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>

                <time
                    title={pubDataFormat}
                    dateTime={publishedAt.toISOString()}>
                    {pubDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your Feedback</strong>
                <textarea
                    placeholder='Leave an comment'
                />
                <footer>
                    <button type='submit'> Publish </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}