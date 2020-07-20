import React from 'react'
import Navigation from '../components/Navigation'

const App = (): JSX.Element => {
  return (
    <div>
      <Navigation />
      <div className='o-main'>
        <h1>Content</h1>
      </div>
    </div>
  )
}

export default App
