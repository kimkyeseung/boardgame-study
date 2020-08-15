import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config from '../../config'

const { theme } = config

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
  color: white;
  border: 1px solid;
  font-size: 1.2em;
  text-align: center;
  margin: 0.2rem;
  -webkit-text-stroke-width: .6px;
  -webkit-text-stroke-color: black;
  ${({ solid }) => solid ? solidShape : roundShape};
  ${({ value }) => value && theme.basic[value]};
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
