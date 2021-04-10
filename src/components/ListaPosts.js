import React, {useEffect} from 'react'
import Post from './Post'
import {useSelector, useDispatch} from 'react-redux'
import {obtenerPostsAction} from '../actions/postActions'

function ListaPosts() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    const cargarPosts = () => dispatch(obtenerPostsAction())
    return cargarPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const posts = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)


  return (
    <>
      {
        loading ? <p>Cargando...</p> :
        posts.length === 0 ? 'No hay posts, por favor agrega un primer post' : (
          posts.map(post => (
            <Post 
              key={post.id}
              post={post}
            />
          )).reverse()
        )
      }
    </>
  )
}

export default ListaPosts