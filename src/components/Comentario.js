import React from 'react'

function Comentario({comentario}) {
  console.log(comentario);
  return (
    <div className="comment">
      <p className="email">{comentario.commentEmail}</p>
      <p>{comentario.commentContent}</p>
    </div>
  )
}

export default Comentario
