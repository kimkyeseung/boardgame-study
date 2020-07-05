import React, { Component } from 'react'
import styled from 'styled-components'
import Controller from './Controller'

const SelectedTokens = ({ onClose, tokens = [], isOpen, handler, confirmable }) => {
  return (
    <Controller isOpen={tokens.length ? true : false}>
      <button onClick={onClose}>close</button>
      {tokens.map((token, i) => {
        return <div key={i}>{token}</div>
      })}
      <button disabled={!confirmable} onClick={ev => {
        ev.preventDefault()
        handler(onClose)
      }}>confirm</button>
    </Controller>
  )
}

export default SelectedTokens
