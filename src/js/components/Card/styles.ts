import styled from 'styled-components'
import { BLACK } from '../../base/colours'

export const Card = styled.div`
  box-shadow: 0px 3px 15px rgba(${BLACK}, 0.5);
  width: 100%;
  padding: 20px;

  a {
    color: ${BLACK};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const CardTitle = styled.p`
  font-size: 24px;
  line-height: 1.2;
  margin: 0 0 10px 0;
`

export const CardDescription = styled.p`
  line-height: 1.2;
  margin: 0;
`
