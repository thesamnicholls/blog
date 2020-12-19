import styled from 'styled-components'
import { BLACK, WHITE } from '../../base/colours'
import { mediaQueries } from '../../base/breakpoints'

export const Navigation = styled.div`
  background-color: ${BLACK};
  padding: 20px;
`

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

export const NavigationTitle = styled.p`
  font-size: 24px;
  color: ${WHITE};
  margin: 0;
`

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`

export const NavigationListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const NavigationLink = styled.a`
  font-size: 18px;
  color: ${WHITE};
  text-decoration: none;
  padding: 10px;
  ${mediaQueries('ms')`
    font-size: 20px;
  `}

  &:hover {
    text-decoration: underline;
  }
`
