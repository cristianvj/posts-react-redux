import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {crearNuevoPostAction} from '../actions/postActions'

function NuevoPost({history}) {

  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const agregarPost = post => dispatch(crearNuevoPostAction(post))

  const cargando = useSelector(state=>state.posts.loading)
  const error = useSelector(state=>state.posts.error)

  const submitNuevoPost = e => {
    e.preventDefault()
    if(titulo.trim() === '' || contenido === '' || email === ''){
      return
    }

    var fecha = Date.now();

    agregarPost({
      createdAt: fecha,
      title: titulo,
      content: contenido,
      email,
      likes: 0,
      dislikes: 0,
      comments:[]
    })
    setTitulo('')
    setContenido('')
    setEmail('')
    //history.push('/')
  }

  return (
    <>
      <div className="card card-form-post">
        <div className="card-header">
          <h2 className="title-post">Publicar Post</h2>
          <p className="date-post">Todos los campos son obligatorios</p>
        </div>
        <div className="card-footer">
          <div className="form-new-post">
            <form 
              onSubmit={submitNuevoPost}
            >
              <input 
                className="input-post" 
                type="text" 
                placeholder="Titulo del Post" 
                value={titulo}
                onChange={e => setTitulo(e.target.value)}  
              />
              <textarea 
                className="input-post" 
                rows="20" 
                placeholder="Escriba el contenido del post"
                value={contenido}
                onChange={e => setContenido(e.target.value)} 
              >
              </textarea>
              <input 
                className="input-post" 
                type="email" 
                placeholder="Su email" 
                value={email}
                onChange={e => setEmail(e.target.value)} 
              />
              <div className='buttons-footer'>
                <button className="btn-new-comment"><i class="fas fa-save"></i> Publicar</button>
                <Link className="btn-regresar" to={'/'}><i class="fas fa-undo"></i> Regresar</Link>
              </div>
              {
                cargando ? <p>Cargando...</p> : null
              }
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NuevoPost