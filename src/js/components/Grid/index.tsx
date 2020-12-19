import React from 'react'
import * as Styles from './styles'

export interface GridProps {
  children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
  return <Styles.Grid>{children}</Styles.Grid>
}
