import styled from 'styled-components'
import { mediaQueries } from '../../base/breakpoints'

export const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  ${mediaQueries('ms')`
    padding: 20px;
  `}
`
