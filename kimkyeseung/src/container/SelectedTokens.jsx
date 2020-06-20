import React, { Component } from 'react'
import styled from 'styled-components'

class SelectedTokens extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmable: false
    }
  }

  render() {
    const { onClose, tokens } = this.props
    const { confirmable } = this.state
    return (
      <div>
        <button onClick={onClose}>close</button>
        {tokens.map(token => {
          console.log(token)
          return <div>token</div>
        })}
        <button disabled={!confirmable} onClick={onClose}>confirm</button>
      </div>
    )
  }
}

export default SelectedTokens
