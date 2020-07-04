import React, { Component } from 'react'
import styled from 'styled-components'
import Controller from '../components/Controller'

class SelectedTokens extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmable: false
    }
  }

  render() {
    const { onClose, tokens = [], isOpen } = this.props
    const { confirmable } = this.state
    return (
      <Controller isOpen={tokens.length ? true : false}>
        <button onClick={onClose}>close</button>
        {tokens.map(token => {
          return <div>{token}</div>
        })}
        <button disabled={!confirmable} onClick={onClose}>confirm</button>
      </Controller>
    )
  }
}

export default SelectedTokens
