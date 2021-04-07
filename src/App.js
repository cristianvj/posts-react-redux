import React from 'react'
import Header from './components/Header'
import ListaPosts from './components/ListaPosts'
import NuevoPost from './components/NuevoPost'
import Post from './components/Post'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ListaPosts} />
          <Route exact path="/post/nuevo" component={NuevoPost} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

