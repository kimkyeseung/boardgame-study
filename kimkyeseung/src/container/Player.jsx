import React, { Component } from 'react'
import styled from 'styled-components'
import FieldSummary from '../components/FieldSummary'

const Name = styled.div`

`

class Player extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { ctx, player, G, selectedTokens, field } = this.props
    const { currentPlayer } = ctx
    return (
      <div>
        <Name>{field.name}</Name>
        <FieldSummary
          active={player === `player${currentPlayer}`}
          field={G.fields[player]} />
      </div>
    )
  }
}

export default Player
