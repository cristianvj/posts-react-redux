import {
  AGREGAR_POST,
  AGREGAR_POST_EXITO,
  AGREGAR_POST_ERROR,
  COMENZAR_DESCARGA_POSTS,
  COMENZAR_DESCARGA_POSTS_EXITO,
  COMENZAR_DESCARGA_POSTS_ERROR,
  AGREGAR_COMENTARIO
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

export function crearNuevoPostAction(post){
  
  return async(dispatch) => {

    dispatch(agregarPost())

    try {
      await clienteAxios.post('/posts', post)
      dispatch(agregarPostExito(post))
      await Swal.fire(
        'Correcto',
        'El post se agregó correctamente',
        'success',
      )
      window.location="/"
    } catch (error) {
      console.log(error);
      dispatch(agregarPostError(true))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error con la conexion a la API, intenta de nuevo'
      })
    }

  }
}

const agregarPost = () => ({
  type: AGREGAR_POST
})
const agregarPostExito = post => ({
  type: AGREGAR_POST_EXITO,
  payload: post
})
const agregarPostError = estado => ({
  type: AGREGAR_POST_ERROR,
  payload: estado
})

export function obtenerPostsAction() {
  return async (dispatch) => {
    dispatch(descargarPosts())

    try {
        const respuesta = await clienteAxios.get('/posts')
        dispatch(descargaPostsExitosa(respuesta.data))
    } catch (error) {
        console.log(error)
        dispatch(descargarPostsError())
    }
  }
}

const descargarPosts = () => ({
  type: COMENZAR_DESCARGA_POSTS,
  payload: true
})

const descargaPostsExitosa = posts => ({
  type: COMENZAR_DESCARGA_POSTS_EXITO,
  payload: posts
})

const descargarPostsError = () => ({
  type: COMENZAR_DESCARGA_POSTS_ERROR,
  payload: true
})


export function agregarComentarioAction(nuevoPost){
  return async(dispatch) => {
    try {
      await clienteAxios.put(`/posts/${nuevoPost.id}`, nuevoPost)
      dispatch(agregarComentario(nuevoPost))
      await Swal.fire(
        'Correcto',
        'El comentario se agregó correctamente',
        'success',
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error con la conexion a la API, intenta de nuevo'
      })
    }
  }
}

const agregarComentario = nuevoPost =>({
  type: AGREGAR_COMENTARIO,
  payload: nuevoPost
})

export function agregarLikeAction(nuevoPost){
  return async(dispatch) => {
    try {
      await clienteAxios.put(`/posts/${nuevoPost.id}`, nuevoPost)
      dispatch(agregarComentario(nuevoPost))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error con la conexion a la API, intenta de nuevo'
      })
    }
  }
}