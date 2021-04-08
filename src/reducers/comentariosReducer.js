import {
  AGREGAR_COMENTARIO,
  AGREGAR_COMENTARIO_EXITO,
  AGREGAR_COMENTARIO_ERROR,
} from '../types'

const initialState = {
  comentarios: [],
  error: null,
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
  switch(action.type){
    default:
      return state
  }
}