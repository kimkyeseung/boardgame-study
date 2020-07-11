import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledToken = styled.div`
  display: flex;
  justify-content: space-between;
  & > .tokenBundle {
    position: relative;
    width: 120px; height: 120px;
  } 
  & > .count {

  }
`

const One = styled.div`
  position: absolute;
  width: 100px; height: 100px;
  border-radius: 100%;
  border: 12px solid ${({ color }) => color};
  box-sizing: border-box;
  background: lightgray;
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  top: ${({ index }) => `${index * 4}px`};
  left: ${({ index }) => `${index * 4}px`};
`

const Token = ({ color, count, ...props }) => (
  <StyledToken {...props}>
    <div className="tokenBundle">
      {Array(count).fill().map((num, i) => <One key={i} index={i} color={color} className="token"></One>)}
    </div>
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
