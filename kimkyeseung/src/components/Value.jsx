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

const cases = {}

cases.noble = css``

cases.development = css`
  display: block;
  width: 40px; height: 40px;
  border-radius: 100%;
`

const StyledValue = styled.div`
  width: 30px; height: 30px;
  ${({ value }) => value && colors[value]};
  ${({ type }) => type && cases[type]};
`

const Value = props => <StyledValue {...props} />

Value.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string
}

Value.defaultProps = {
  type: 'development'
}

export default Value
