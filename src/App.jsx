import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/CarlosViniMSouza.png",
      name: "Carlos",
      role: "Freelance Software Developer"
    },
    content: [
      {
        type: 'paraghaph',
        content: 'Salve turma! ✌️',
      },
      {
        type: 'paraghaph',
        content: '👊 Projeto finalizado com sucesso!',
      },
      {
        type: 'link',
        content: 'diego3g.design/sdw',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:10'),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/ViniSouza.png",
      name: "Vinicius",
      role: "Software Developer"
    },
    content: [
      {
        type: 'paraghaph',
        content: 'Salve turma! ✌️',
      },
      {
        type: 'paraghaph',
        content: '👊 Projeto finalizado com sucesso!',
      },
      {
        type: 'link',
        content: 'diego3g.design/sdw',
      },
    ],
    publishedAt: new Date('2022-05-08 20:30:10'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
