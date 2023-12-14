import { PencilLine} from 'phosphor-react'

import style from './Sidebar.module.css'

export function Sidebar () {
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} 
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />

            <div className={style.profile}>
                <img className={style.avatar}src="https://github.com/DanielFossali.png" alt="" />

                <strong>Daniel Fossali</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
            
        </aside>
    )
}