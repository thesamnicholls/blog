import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path='/blog' component={Home} />
      <Route exact path='/blog/about' component={About} />
    </BrowserRouter>
  )
}

export default App
