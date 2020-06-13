import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Value from './Value'
import Cost from './Cost'

const normalStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  & > header {
    height: 50px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    & > .vp {
      color: white;
      font-size: 2.6em;
      margin: 0;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
`

const emptyStyle = css`
  border: 2px dotted gray; 
`

const Space = styled.div`
  height: 200px;
  width: 150px;
  border-radius: 12px;
  margin: 0.4rem;
  padding: 0;
  ${({ empty }) => empty ? emptyStyle : normalStyle};
`



export default ({ development, onClick }) => {
  if (!development) {
    return <Space empty></Space>
  }
  const { grade, cost, value, victoryPoint } = development
  return (
    <Space onClick={onClick} backgroundUrl={`kimkyeseung/image/${value + grade}.jpg`}>
      <header>
        <p className="vp">{victoryPoint ? victoryPoint : ''}</p>
        <Value value={value} />
      </header>
      <div className="cost">
        {Object.keys(cost).map((token, i) => <Cost key={i} value={token} amount={cost[token]} />)}
      </div>
    </Space>
  )
}