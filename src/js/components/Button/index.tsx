import React from 'react'
import * as Styles from './styles'

type ButtonProps = {
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <Styles.Button onClick={onClick}>{title}</Styles.Button>
}

export default Button
