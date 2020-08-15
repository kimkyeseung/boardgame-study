import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from '../../config'

const { theme } = config

const tokenSize = 90

const StyledToken = styled.div`
  display: flex;
  justify-content: space-between;
  & > .tokenBundle {
    position: relative;
    width: 105px; height: 105px;
  } 
  & > .count {

  }
`

const One = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: ${tokenSize}px;
  height: ${tokenSize}px;
  border-radius: 100%;
  box-sizing: border-box;
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  top: ${({ index }) => `${index * 3}px`};
  left: ${({ index }) => `${index * 3}px`};
  border: 1px solid;
  padding: 0.7rem;
  ${({ value }) => value && theme.basic[value]};
  &::after {
    content: '';
    display: block;
    border-radius: 100%;
    width: 100%;
    opacity: 0.75;
    background: lightgray;
  }
`

const Token = ({ color, count, ...props }) => (
  <StyledToken {...props}>
    <div className="tokenBundle">
      {Array(count).fill().map((num, i) => <One key={i} index={i} value={color} className="token"></One>)}
    </div>
    <div className="count">{count}</div>
  </StyledToken>
)

Token.Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

Token.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'black', 'white']).isRequired,
  count: PropTypes.number
}

export default Token
