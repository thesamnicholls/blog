import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/blog' component={Home} />
        <Route exact path='/blog/about' component={About} />
        <Route exact path='/blog/:post_id' component={Post} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
