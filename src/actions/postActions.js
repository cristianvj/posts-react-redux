import {
  AGREGAR_POST,
  AGREGAR_POST_EXITO,
  AGREGAR_POST_ERROR,
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

export function crearNuevoPostAction(post){
  
  return async(dispatch) => {

    dispatch(agregarPost())

    try {
      await clienteAxios.post('/posts', post)
      dispatch(agregarPostExito(post))
      Swal.fire(
        'Correcto',
        'El post se agregó correctamente',
        'success',
      )
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