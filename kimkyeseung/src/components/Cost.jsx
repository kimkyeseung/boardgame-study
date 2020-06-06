import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const colors = {}
colors.red = css`
  background-color: red;
`
colors.white = css`
  background-color: white;
`
colors.blue = css`
  background-color: blue;
`
colors.green = css`
  background-color: green;
`
colors.black = css`
  background-color: black;
`

const StyledCost = styled.div`
  width: 16px; height: 16px;
  border-radius: 100%;
  padding: 0.4rem;
  ${({ value }) => value && colors[value]};
  color: white;
  font-size: 1.2em;
  text-align: center;
  margin: 0.2rem;
  -webkit-text-stroke-width: .6px;
  -webkit-text-stroke-color: black;
`

const Cost = ({ amount, ...props }) => <StyledCost {...props}>{amount}</StyledCost>

Cost.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.number
}

Cost.defaultProps = {
  amount: 0
}

export default Cost
