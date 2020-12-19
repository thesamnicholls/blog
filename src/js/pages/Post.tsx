import React, { useState, useEffect } from 'react'
import { History } from 'history'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import Body from '../components/Body/index'
import Title from '../components/Title/index'
import Row from '../components/Row/index'
import Button from '../components/Button/index'
import Loading from '../components/Loading/index'
import Description from '../components/Description/index'

export interface Post {
  id: string
  title: string
  body: string
}

export interface OwnProps {
  match: { params: { post_id: string } }
}

export interface PostProps {
  post?: Post | undefined
  deletePost(id: string): void
  history: History
}

const Post = ({ post, deletePost, history }: PostProps): JSX.Element => {
  const [render, setRender] = useState(false)

  const handleClick = () => {
    deletePost(post!.id)
    history.push('/blog')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRender(true)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Body>
      {render ? (
        <>
          <Title text={post!.title} />
          <Description text={post!.body} />
          <Row>
            <Button title='Delete Post' onClick={handleClick} />
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </Body>
  )
}

const mapStateToProps = (state: { posts: Array<Post> }, ownProps: OwnProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find((post: Post) => post.id === id),
  }
}

const mapDispatchToProps = (
  dispatch: (deletePost: { type: string; id: string }) => void,
) => {
  return {
    deletePost: (id: string) => {
      dispatch(deletePost(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
