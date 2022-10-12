import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './styles/Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong> Diego Gonçalves </strong>
                        <span> React.js Developer Expert </span>
                    </div>
                </div>

                <time
                    title='03 October at 10:15h'
                    dateTime='2022-10-03 10:15:20'>
                    Posted 1h ago
                </time>
            </header>

            <div className={styles.content}>
                <p> Salve turma! ✌️ </p>
                <p> 👊 Projeto finalizado com sucesso! </p>
                <p>
                    <a href=''> diego3g.design/sdw </a>
                </p>
                <p>
                    <a href=''> #nlw </a> {' '}
                    <a href=''> #ignite </a> {' '}
                    <a href=''> #reactjs </a> {' '}
                </p>
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