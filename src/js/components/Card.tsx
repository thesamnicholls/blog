import React from 'react'
import { Link } from 'react-router-dom'

export interface CardProps {
  id: number
  title: string
  body: string
}

const Card = ({ title, body, id }: CardProps) => {
  return (
    <div className='c-card'>
      <Link
        className='c-card__link'
        to={'/blog/' + id}
        title='Click here to go to view the post'
      >
        <p className='c-card__title'>{title}</p>
      </Link>
      <p className='c-card__description'>{body}</p>
    </div>
  )
}

export default Card
