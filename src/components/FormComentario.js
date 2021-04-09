import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function FormComentario() {
  let location = useLocation()
  return (
    <>
      <div class="form-comment">
        <h3>Nuevo Comentario</h3>
        <form action="">
          <input class="input-comment" type="text" placeholder="Nombre del comentario" />
          <textarea class="input-comment" rows="5" placeholder="Escriba su comentario"></textarea>
          <input class="input-comment" type="email" placeholder="Su email" />
          <div className='buttons-footer'>
            <button class="btn-new-comment"><i class="fas fa-comment-dots"></i> Commentar</button>
            {
              location.pathname !== '/' ?
                <Link className="btn-regresar" to={'/'}><i class="fas fa-undo"></i> Regresar</Link>
              : null
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default FormComentario
