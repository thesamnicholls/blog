import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { connect } from 'react-redux'

const Post = (props: any): JSX.Element => {
  const [render, setRender] = useState(false)
  const post = props.post

  const handleClick = () => {
    props.deletePost(props.post.id)
    props.history.push('/blog')
  }

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
      {render ? (
        <div>
          <h1 className='l-page__title'>{post.title}</h1>
          <p className='l-page__description'>{post.body}</p>
          <div className='o-row'>
            <button
              className='c-button'
              title='Click here to delete post'
              onClick={handleClick}
            >
              Delete Post
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // Getting the id of the current post_id
  let id = ownProps.match.params.post_id
  return {
    // Getting the post which is id is equal to the post_id in the url
    post: state.posts.find((post) => post.id === id),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: 'DELETE_POST', id: id })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
