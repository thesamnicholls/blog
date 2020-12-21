import React from 'react'
import { Link } from 'react-router-dom'
import * as Styles from './styles'

export default function Navigation() {
  return (
    <Styles.Navigation>
      <Styles.NavigationWrapper>
        <Styles.NavigationTitle>Blog</Styles.NavigationTitle>
        <Styles.NavigationList>
          <Styles.NavigationListItem>
            <Link to='/'>Home</Link>
          </Styles.NavigationListItem>
          <Styles.NavigationListItem>
          <Link to='/about'>About</Link>
          </Styles.NavigationListItem>
        </Styles.NavigationList>
      </Styles.NavigationWrapper>
    </Styles.Navigation>
  )
}
