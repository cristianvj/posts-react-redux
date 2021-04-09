import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function FormComentario({id}) {
  
  let location = useLocation()

  const [nombreComentario, setNombreComentario] = useState('')
  const [txtComentario, setTxtComentario] = useState('')
  const [emailComentario, setEmailComentario] = useState('')

  const handleSendForm = e => {
    e.preventDefault()
  }

  return (
    <>
      <div className="form-comment">
        <h3>Nuevo Comentario {id}</h3>
        <form action="">
          <input 
            className="input-comment" 
            type="text" 
            placeholder="Nombre del comentario" 
            value={nombreComentario}
            onChange={e => setNombreComentario(e.target.value)}  
          />
          <textarea 
            className="input-comment" 
            rows="5" 
            placeholder="Escriba su comentario"
            value={txtComentario}
            onChange={e => setTxtComentario(e.target.value)}
          >
          </textarea>
          <input 
            className="input-comment" 
            type="email" 
            placeholder="Su email" 
            value={emailComentario}
            onChange={e => setEmailComentario(e.target.value)}
          />
          <div className='buttons-footer'>
            <button 
              className="btn-new-comment"
              onClick={handleSendForm}  
            >
              <i className="fas fa-comment-dots"></i> Commentar
            </button>
            {
              location.pathname !== '/' ?
                <Link className="btn-regresar" to={'/'}><i className="fas fa-undo"></i> Regresar</Link>
              : null
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default FormComentario
