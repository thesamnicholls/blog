import React from 'react'
import * as Styles from './styles'

export interface BodyProps {
  children: React.ReactNode
}

export default function Body({ children }: BodyProps) {
  return <Styles.Body>{children}</Styles.Body>
}
