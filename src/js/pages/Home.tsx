import React, { useState, useEffect } from 'react'

const Home = (): JSX.Element => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    // Delay the useEffect by 1000ms
    const timeout = setTimeout(() => {
      // Fetch the posts data from the API
      fetch('https://jsonplaceholder.typicode.com/posts/')
        // Store the response
        .then((response) => response.json())
        // Only return the first 10 results
        .then((data) => setPosts(data.slice(0, 10)))
    }, 1000)
    // Clear the timer when it's done
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='l-page'>
      <h1 className='l-page__title'>Blog</h1>
      {posts.length > 0 ? (
        <div className='l-grid'>
          {posts.map((post) => (
            <div className='c-card' key={post.id}>
              <p className='c-card__title'>{post.title}</p>
              <p className='c-card__description'>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        // TODO: Add in Loading Spinner
        <h1>Loading</h1>
      )}
    </div>
  )
}

export default Home
