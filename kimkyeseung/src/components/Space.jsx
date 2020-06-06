import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Space = styled.div`
  height: 200px;
  width: 150px;
  border: 1px solid red;
  margin: 0.4rem;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  & > div {
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    padding: 0;
    display: block;
    & > .vp {
      color: white;
      font-size: 4em;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
`

const Cost = ({ token, value }) => {
  return (
    <div>
      <div>{token}</div>
      <div>{value}</div>
    </div>
  )
}

export default ({ development, onClick }) => {
  const { grade, cost, value, victoryPoint } = development

  return (
    <Space onClick={onClick} backgroundUrl={`kimkyeseung/image/${value + grade}.jpg`}>
      <div>
        <p className="vp">{victoryPoint ? victoryPoint : ''}</p>
      </div>
      <div className="cost">
        {Object.keys(cost).map(token => {
          return <Cost token={token} value={cost[token]} />
        })}
      </div>
    </Space>
  )
}