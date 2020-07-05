import React from 'react'
import styled, { css } from 'styled-components'

export const Empty = styled.div`
  display: block;
  box-sizing: border-box;
  height: ${({ height }) => height ? `${height}px` : '100px'};
`
