import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { connect } from 'react-redux'

const Home = (props): JSX.Element => {
  const [visible, setVisible] = useState(5)
  const [render, setRender] = useState(false)
  const { posts } = props

  useEffect(() => {
    // Delay the useEffect by 1000ms
    const timeout = setTimeout(() => {
      // Set the render state to true
      setRender(true)
    }, 1000)
    // Clear the timer when it's done
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='l-page'>
      <h1 className='l-page__title'>Blog</h1>
      {render ? (
        <div>
          <div className='row'>
            <div className='l-grid'>
              {posts.slice(0, visible).map((post) => (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </div>
          </div>
          <div className='o-row'>
            {visible < posts.length && (
              <Button title='Load More' setVisible={setVisible} />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home)
