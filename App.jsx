import { Header } from './assets/components/Header'
import { Post } from './assets/components/Post'

import style from './App.module.css'

import './global.css'
import { Sidebar } from './assets/components/sidebar'

function App() {

   return (
    <div>
      <Header />

        <div className={style.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Daniel Fossali" 
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facere iste eum eveniet unde qui quasi! Cupiditate deleniti autem dolorem velit quidem, inventore odio ullam minus nam natus amet error?"
            />
            <Post
              author = "Heitor Faria"
              content= "Novo post"
            />
          </main>
        </div>
      </div>  
  )
}

export default App

