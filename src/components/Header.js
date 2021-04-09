import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <h1><Link to={'/'} className='h1'>VC Posts</Link></h1>
        </div>
        <div className="nav-menu">
          <div>
            <Link className="btn-new-post" to={'/post/nuevo'}><i class="fas fa-edit"></i> Nuevo Post</Link>
          </div>
          <div className="dropdown">
            <i className="fas fa-user-tie dropbtn"></i>
            <ul className="dropdown-content">
              <li>Mi perfil</li>
              <li>Mensajes</li>
              <li>Grupos</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
