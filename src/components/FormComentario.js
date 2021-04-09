import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {agregarComentarioAction} from '../actions/postActions'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

function FormComentario({id}) {
  
  const dispatch = useDispatch()

  const posts = useSelector(state => state.posts.posts)

  const agregarComentario = nuevoPost => dispatch(agregarComentarioAction(nuevoPost))
  
  let location = useLocation()

  const [nombreComentario, setNombreComentario] = useState('')
  const [txtComentario, setTxtComentario] = useState('')
  const [emailComentario, setEmailComentario] = useState('')


  const handleSendForm = e => {
    e.preventDefault()
    if(nombreComentario.trim() === '' || txtComentario.trim() === '' || emailComentario.trim() === ''){
      return Swal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        text: 'Debes diligenciar todos los campos del formulario'
      })
    }
    const addComentarioPosts = posts.map(post =>
      post.id === id.toString() ? {...post, comments: [...post.comments, {
        commentEmail: emailComentario,
        commenttitle: nombreComentario,
        commentContent: txtComentario
      }]} : post
    )
    const nuevoPost = addComentarioPosts.filter(post => post.id === id.toString())

    agregarComentario(nuevoPost[0])

    setNombreComentario('')
    setTxtComentario('')
    setEmailComentario('')
  }

  return (
    <>
      <div className="form-comment">
        <h3>Nuevo Comentario</h3>
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
