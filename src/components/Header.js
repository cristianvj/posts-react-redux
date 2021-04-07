import React from 'react'

function Header() {
  return (
    <header>
      <nav class="navbar">
        <div>
          <h1>VC Posts</h1>
        </div>
        <div class="nav-menu">
          <div>
            <button class="btn-new-post">Publicar Post</button>
          </div>
          <div class="dropdown">
            <i class="fas fa-user-tie dropbtn"></i>
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
