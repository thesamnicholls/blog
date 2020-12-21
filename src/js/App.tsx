import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Navigation from './components/Navigation/index'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'

export default function App() {
  const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }
  `

  return (
    <HashRouter basename='/'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/:post_id' component={Post} />
      </Switch>
      <GlobalStyle />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </HashRouter>
  )
}
