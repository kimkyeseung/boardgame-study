import React from 'react'
import styled, { css } from 'styled-components'

const StyledController = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
  max-width: 200px;
  display: none;
  ${({ isOpen }) => isOpen && visibleStyle}
`

const visibleStyle = css`
  display: block;
`

const Controller = ({ isOpen, ...props}) => {
  return <StyledController isOpen={isOpen}>{props.children}</StyledController>
}

export default Controller

