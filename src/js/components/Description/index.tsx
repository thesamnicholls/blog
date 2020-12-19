import React from 'react'
import * as Styles from './styles'

export interface DescriptionProps {
  text: string
}

export default function Description({ text }: DescriptionProps) {
  return <Styles.Description>{text}</Styles.Description>
}
