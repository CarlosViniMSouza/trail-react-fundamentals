import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-br';

import styles from './styles/Post.module.css'

export function Post({ author, publishedAt, content }) {
    const pubDataFormat = format(publishedAt, "d LLLL 'as' HH:mm'h'", { locale: ptBR });

    const pubDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

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

            <form className={styles.commentForm}>
                <strong>Leave your Feedback</strong>
                <textarea
                    placeholder='Leave an comment'
                />
                <footer>
                    <button type='submit'> Publish </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}