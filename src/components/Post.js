import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {agregarLikeAction} from '../actions/postActions'
import { Link } from 'react-router-dom'
import FormComentario from './FormComentario'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale'

function Post({post}) {

  const [formComentar, setFormComentar] = useState(false)

  const dispatch = useDispatch()
  const agregarLike = nuevoPost => dispatch(agregarLikeAction(nuevoPost))

  const posts = useSelector(state => state.posts.posts)


  const handleFormComentar = () => {
    formComentar ? setFormComentar(false) : setFormComentar (true)
  }

  const handleLike = (action) => {
    const addLikePosts = posts.map(p =>
      p.id === post.id ? 
      action === 'like'?
        {...p, likes: p.likes + 1}
      : {...p, dislikes: p.dislikes + 1}
      : p
    )
    const nuevoPost = addLikePosts.filter(p => p.id === post.id.toString())
    agregarLike(nuevoPost[0])
  }

  return (
    <div className="card">
        <div className="card-header">
          <h2 className="title-post">{post.title}</h2>
          <p className="date-post">{`Publicado hace: ${formatDistanceToNow(new Date(post.createdAt), {locale: es})}`}</p>
        </div>
        <div className="card-body">
          <p className="content-post">{`${post.content.slice(0,199)}...`} <Link className="link-ver-mas" to={`/post/${post.id}`} >Ver mas</Link></p>
          <p className="email-post">{post.email}</p>
        </div>
        <div className="card-footer">
          <div className="btns-footer">
            <div className="summary-buttons">
              <div className="summary-button">
                <p>{post.likes}</p>
                <i 
                  className="fas fa-thumbs-up" 
                  onClick={()=>handleLike('like')}
                ></i>
              </div>
              <div className="summary-button">
                <p>{post.dislikes}</p>
                <i 
                  className="fas fa-thumbs-down" 
                  onClick={()=>handleLike('dislike')}
                ></i>
              </div>
              <div className="summary-button">
                <p>{post.comments.length}</p>
                <i 
                  className="fas fa-comments"
                  onClick={handleFormComentar}
                ></i>
              </div>
            </div>
          </div>
          {
            formComentar ? 
              <>
                <hr className="hr-card" />
                <FormComentario id={post.id}/>
              </>
            : null
          }
        </div>
      </div>
  )
}

export default Post
