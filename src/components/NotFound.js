import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Página no encontrada, <Link to={'/'}>Ir a inicio</Link>
    </div>
  )
}

export default NotFound
