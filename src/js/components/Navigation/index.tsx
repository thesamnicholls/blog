import React from 'react'
import * as Styles from './styles'

export default function Navigation() {
  return (
    <Styles.Navigation>
      <Styles.NavigationWrapper>
        <Styles.NavigationTitle>Blog</Styles.NavigationTitle>
        <Styles.NavigationList>
          <Styles.NavigationListItem>
            <Styles.NavigationLink href='/blog' title='Click here to go home'>
              Home
            </Styles.NavigationLink>
          </Styles.NavigationListItem>
          <Styles.NavigationListItem>
            <Styles.NavigationLink
              href='/blog/about'
              title='Click here to go to the about page'
            >
              About
            </Styles.NavigationLink>
          </Styles.NavigationListItem>
        </Styles.NavigationList>
      </Styles.NavigationWrapper>
    </Styles.Navigation>
  )
}
