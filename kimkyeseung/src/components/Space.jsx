import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Space = styled.div`
  height: 200px;
  width: 150px;
  border: 1px solid red;
  & > header {
    height: 20px;
    background: rgba(255, 255, 255, 5);
    & > .vp {
      color: white;
      font-size: 4em;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
`

export default ({ development, onClick }) => {
  const { grade, cost, value, victoryPoint } = development
  return (
    <Space onClick={onClick}>
      <header>
        <p className="vp">{victoryPoint ? victoryPoint : ''}</p>
      </header>
    </Space>
  )
}