import React from 'react'
import * as Styles from './styles'

export interface CardProps {
  id: number
  title: string
  body: string
}

export default function Card({ title, body, id }: CardProps) {
  return (
    <Styles.Card>
      <Styles.CardLink
        href={'/blog/' + id}
        title='Click here to go to view the post'
      >
        <Styles.CardTitle>{title}</Styles.CardTitle>
      </Styles.CardLink>
      <Styles.CardDescription>{body}</Styles.CardDescription>
    </Styles.Card>
  )
}
