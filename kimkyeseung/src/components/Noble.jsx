import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Cost from './Cost'
import NOBLES from '../../assets/nobles.json'

const sideSize = 150

const background = css`
  background-repeat: no-repeat;
  background-image: url('image/noble_img_sprite.jpg');
  background-size: cover;
  background-position-y: 0;
  &.NB01 { background-position-x: 0; }
  &.NB02 { background-position-x: -${sideSize}px; }
  &.NB03 { background-position-x: -${sideSize * 2}px; }
  &.NB04 { background-position-x: -${sideSize * 3}px; }
  &.NB05 { background-position-x: -${sideSize * 4}px; }
  &.NB06 { background-position-x: -${sideSize * 5}px; }
  &.NB07 { background-position-x: -${sideSize * 6}px; }
  &.NB08 { background-position-x: -${sideSize * 7}px; }
  &.NB09 { background-position-x: -${sideSize * 8}px; }
  &.NB10 { background-position-x: -${sideSize * 9}px; }
`

const normalStyle = css`
  ${background}
  & > header {
    width: 40px;
    height: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.8);
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > .vp {
      color: white;
      font-size: 2.6em;
      margin: 0;
      text-align: center;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
`

const Tile = styled.div`
  height: ${sideSize}px;
  width: ${sideSize}px;
  border-radius: 8px;
  margin: 0.4rem;
  padding: 0;
  overflow: hidden;
  ${normalStyle}
`

const Noble = ({ noble, onClick }) => {
  const { condition, id, victoryPoint } = NOBLES[noble]

  return (
    <Tile onClick={onClick} className={id}>
      <header>
        <p className="vp">{victoryPoint}</p>
        <div className="condition">
          {Object.keys(condition).map((token, i) => <Cost key={i} value={token} amount={condition[token]} />)}
        </div>
      </header>
    </Tile>
  )
}

Noble.Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Noble
