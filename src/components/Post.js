import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FormComentario from './FormComentario'

function Post() {

  const [formComentar, setFormComentar] = useState(false)

  const handleFormComentar = () => {
    formComentar ? setFormComentar(false) : setFormComentar (true)
  }

  return (
      <div class="card">
        <div class="card-header">
          <h2 class="title-post">Titulo Del Post</h2>
          <p class="date-post">2 days ago</p>
        </div>
        <div class="card-body">
          <p class="content-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias alias omnis sunt, ullam cupiditate enim animi voluptates iure accusantium? Perferendis eos ea quisquam quasi aperiam eveniet modi sit veniam?... <Link class="link-ver-mas" to={"/post/1"}>Ver mas</Link></p>
          <p class="email-post">correoautor@gmail.com</p>
        </div>
        <div class="card-footer">
          <div class="btns-footer">
            <div class="summary-buttons">
              <div class="summary-button">
                <p>15</p>
                <i class="fas fa-thumbs-up"></i>
              </div>
              <div class="summary-button">
                <p>8</p>
                <i class="fas fa-thumbs-down"></i>
              </div>
              <div class="summary-button">
                <p>20</p>
                <i 
                  class="fas fa-comments"
                  onClick={handleFormComentar}
                ></i>
              </div>
            </div>
          </div>
          {
            formComentar ? 
              <>
                <hr class="hr-card" />
                <FormComentario/>
              </>
            : null
          }
        </div>
      </div>
  )
}

export default Post
