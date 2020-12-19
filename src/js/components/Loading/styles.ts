import styled, { keyframes } from 'styled-components'
import { BLACK } from '../../base/colours'

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  border-radius: 50%;
  border: 4px solid rgba(${BLACK}, 0.25);
  animation: 1.64s ${loading} infinite linear;
  border-top: 4px solid ${BLACK};
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`
