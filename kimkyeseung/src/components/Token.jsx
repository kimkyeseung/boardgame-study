import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledToken = styled.div`
  display: flex;
  justify-content: space-between;
  & > .token {
    width: 100px; height: 100px;
    border-radius: 100%;
    border: 12px solid ${({ color }) => color};
    box-sizing: border-box;
  }
  & > .count {

  }
`

const Token = ({ color, count, ...props }) => (
  <StyledToken color={color} {...props}>
    <div className="token"></div>
    <div className="count">{count}</div>
  </StyledToken>
)

Token.Wrapper = styled.div`

`

Token.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'black', 'white']).isRequired,
  count: PropTypes.number
}

export default Token
