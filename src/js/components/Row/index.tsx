import React from 'react'
import * as Styles from './styles'

export interface RowProps {
  children: React.ReactNode
}

export default function Row({ children }: RowProps) {
  return <Styles.Row>{children}</Styles.Row>
}
