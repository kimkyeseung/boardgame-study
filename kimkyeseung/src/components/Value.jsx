import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config from '../../config'

const { theme } = config

const cases = {}

cases.noble = css``

cases.development = css`
  display: block;
  width: 40px; height: 40px;
  border-radius: 100%;
`

const StyledValue = styled.div`
  width: 30px; height: 30px;
  border: 1px solid;
  ${({ value }) => value && theme.basic[value]};
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
