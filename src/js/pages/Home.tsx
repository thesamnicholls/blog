import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Body from '../components/Body/index'
import Title from '../components/Title/index'
import Row from '../components/Row/index'
import Grid from '../components/Grid/index'
import Button from '../components/Button/index'
import Card from '../components/Card/index'
import Loading from '../components/Loading/index'

export interface Posts {
  id: number
  title: string
  body: string
}

export interface HomeProps {
  posts: Array<Posts>
}

const Home = ({ posts }: HomeProps): JSX.Element => {
  const [visible, setVisible] = useState(5)
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRender(true)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  const loadMore = () => {
    setVisible((prevState: number) => prevState + 5)
  }

  return (
    <Body>
      <Title text='Blog' />
      {render ? (
        <>
          <Row>
            <Grid>
              {posts.slice(0, visible).map((post: Posts) => (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </Grid>
          </Row>
          <Row>
            {visible < posts.length && (
              <Button title='Load More' onClick={loadMore} />
            )}
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </Body>
  )
}

const mapStateToProps = (state: { posts: Array<Posts> }) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home)
