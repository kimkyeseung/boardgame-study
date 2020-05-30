import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Space = styled.div`
  height: 200px;
  width: 150px;
  border: 1px solid red;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  & > header {
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

export default ({ development, onClick }) => {
  const { grade, cost, value, victoryPoint } = development

  return (
    <Space onClick={onClick} backgroundUrl={`kimkyeseung/image/${value + grade}.jpg`}>
      <header>
        <p className="vp">{victoryPoint ? victoryPoint : ''}</p>
      </header>
    </Space>
  )
}