import React from 'react'
import FormComentario from './FormComentario'

function DetallePost() {
  return (
    <>
      <div className="card card-form-post">
        <div className="card-header">
          <h2 className="title-post">Titulo del Post</h2>
          <p className="date-post">Hace 2 semanas</p>
        </div>
        <div className="card-body">
          <p className="content-post">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas at sequi corporis eum accusamus voluptatibus, aliquam obcaecati neque consectetur atque doloribus officiis qui unde velit optio consequuntur! Voluptas, obcaecati alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br/>
          <br/>
          Accusamus quam, laudantium eligendi magni a eveniet possimus inventore libero architecto rem, iusto quae reprehenderit fugiat repellat. Commodi provident eos quidem molestias.</p>
          <p className="email-post">correoautor@gmail.com</p>
        </div>
        <div className="card-footer">
          <br/>
          <div className="btns-footer">
            <div className="summary-buttons">
              <div className="summary-button">
                <p>15</p>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="summary-button">
                <p>8</p>
                <i className="fas fa-thumbs-down"></i>
              </div>
              <div className="summary-button">
                <p>20</p>
                <i className="fas fa-comments"></i>
              </div>
            </div>
          </div>
          <br/>
          <FormComentario/>
          <hr className="hr-card" />
          <div className="comments">
            <h3>Comentarios</h3>
            <div className="comment">
              <p className="email">email@comment.com</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa magnam soluta ducimus</p>
            </div>
            <div className="comment">
              <p className="email">email@comment.com</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa magnam soluta ducimus</p>
            </div>
            <div className="comment">
              <p className="email">email@comment.com</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa magnam soluta ducimus</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetallePost
