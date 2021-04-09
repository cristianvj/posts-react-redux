import React from 'react'
import FormComentario from './FormComentario'
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Comentario from './Comentario'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale'

function DetallePost() {

  let { id } = useParams();
  
  const posts = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)

  const post = posts[Number(id)-1]

  return (
    <>
    {
      loading ? <p>Cargando...</p> :
      <>
      <div className="card card-form-post">
        <div className="card-header">
          <h2 className="title-post">{post.title}</h2>
          <p className="date-post">{`Publicado hace: ${formatDistanceToNow(new Date(post.createdAt), {locale: es})}`}</p>
        </div>
        <div className="card-body">
          <p className="content-post">{post.content}</p>
          <p className="email-post">{post.email}</p>
        </div>
        <div className="card-footer">
          <br/>
          <div className="btns-footer">
            <div className="summary-buttons">
              <div className="summary-button">
                <p>{post.likes}</p>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="summary-button">
                <p>{post.dislikes}</p>
                <i className="fas fa-thumbs-down"></i>
              </div>
              <div className="summary-button">
                <p>{
                post.comments.length
              }</p>
                <i className="fas fa-comments"></i>
              </div>
            </div>
          </div>
          <br/>
          <hr className="hr-card" />
          <FormComentario/>
          <hr className="hr-card" />
          <div className="comments">
          {
            post.comments === 0 ? 
            <div className="comment">
              <p>No hay comentarios</p>
            </div>
            : 
            <>
              <h3>Comentarios</h3>
              {
                post.comments.map(comment => (
                  <Comentario 
                    key={comment.id} 
                    comentario={comment}
                  />
                )).reverse()
                            }
            </>
          }
          </div>
        </div>
      </div>
      </>
      }
    </>
  )
}

export default DetallePost
