import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import comentariosReducer from './comentariosReducer'

export default combineReducers({
  posts: postsReducer,
  comentarios: comentariosReducer,
})