import React from 'react'
import * as Styles from './styles'

export interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return <Styles.Title>{text}</Styles.Title>
}
