import style from './Post.module.css'

export function Post () {
    return(
        <article className={style.post}>
            <header className={style.hPost}>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/DanielFossali.png" alt="" />
                    <div className={style.authorInfo}>
                        <strong>Daniel Fossali</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='12 de dezembro de 2023' dateTime='2023-05-11 08:00'>Publicado a uma hora</time>
            </header>

            <div className={style.content}>
                <p>Olá rede! 🤙</p>
                <p>Começo hoje a dar meus primeiros passos em react com o curso da Rocketseat, super animado para ver o que estar por vir, vou postando o andamento do projeto no meu Github ✌️ </p>
                <p><a href="https://github.com/DanielFossali"> https://github.com/DanielFossali </a> 👈</p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe seu comentário'/>

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
                
            </form>
        </article>
    )
}
   
