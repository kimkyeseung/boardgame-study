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

const solidShape = css`
  width: 8px; height: 12px;
  border-radius: 4px;
  padding: 0.2rem 0.4rem 0.6rem;
  margin: 0.2rem auto;
  padding-top: 0.2rem auto;
`

const roundShape = css`
  width: 24px; height: 24px;
  border-radius: 100%;
  box-sizing: border-box;
  padding-top: 0.2rem;
`

const StyledCost = styled.div`
  ${({ solid }) => solid ? solidShape : roundShape};
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
  amount: PropTypes.number,
  solid: PropTypes.bool
}

Cost.defaultProps = {
  amount: 0,
  solid: false
}

export default Cost
