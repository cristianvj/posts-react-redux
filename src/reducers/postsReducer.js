import {
  AGREGAR_POST,
  AGREGAR_POST_EXITO,
  AGREGAR_POST_ERROR,
  COMENZAR_DESCARGA_POSTS,
  COMENZAR_DESCARGA_POSTS_EXITO,
  COMENZAR_DESCARGA_POSTS_ERROR,
} from '../types'

const initialState = {
  posts: [],
  post: {},
  error: null,
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
  switch(action.type){
    case COMENZAR_DESCARGA_POSTS:
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
    case COMENZAR_DESCARGA_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case COMENZAR_DESCARGA_POSTS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload
      }
    default:
      return state
  }
}