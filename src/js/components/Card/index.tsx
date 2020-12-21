import React from 'react'
import { Link } from 'react-router-dom'
import * as Styles from './styles'

export interface CardProps {
  id: number
  title: string
  body: string
}

export default function Card({ title, body, id }: CardProps) {
  return (
    <Styles.Card>
      <Link to={'/' + id} title='Click here to go to view the post'>
        <Styles.CardTitle>{title}</Styles.CardTitle>
      </Link>
      <Styles.CardDescription>{body}</Styles.CardDescription>
    </Styles.Card>
  )
}
