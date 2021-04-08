import {
  AGREGAR_POST,
  AGREGAR_POST_EXITO,
  AGREGAR_POST_ERROR,
} from '../types'

const initialState = {
  posts: [],
  error: null,
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
  switch(action.type){
    case AGREGAR_POST:
      return {
        ...state,
        loading: true
      }
    case AGREGAR_POST_EXITO:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload]
      }
    case AGREGAR_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}