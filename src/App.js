import React from 'react'
import Header from './components/Header'
import ListaPosts from './components/ListaPosts'
import NuevoPost from './components/NuevoPost'
import DetallePost from './components/DetallePost'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListaPosts} />
            <Route exact path="/post/nuevo" component={NuevoPost} />
            <Route exact path="/post/:id" component={DetallePost} />
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App

