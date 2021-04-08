import React from 'react'

function FormComentario() {
  return (
    <>
      <div class="form-comment">
        <h3>Nuevo Comentario</h3>
        <form action="">
          <input class="input-comment" type="text" placeholder="Nombre del comentario" />
          <textarea class="input-comment" rows="5" placeholder="Escriba su comentario"></textarea>
          <input class="input-comment" type="email" placeholder="Su email" />
          <button class="btn-new-comment"><i class="fas fa-comment-dots"></i> Commentar</button>
        </form>
      </div>
    </>
  )
}

export default FormComentario
