import React, { Component } from 'react'
import styled from 'styled-components'
import SelectedTokens from './SelectedTokens'
import FieldSummary from '../components/FieldSummary'

const Name = styled.div`

`

class Player extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { ctx, player, G, selectedTokens } = this.props
    console.log({ player })
    const { currentPlayer } = ctx
    return (
      <div>
        <Name>{player}</Name>
        <FieldSummary
          active={player === `player${currentPlayer}`}
          field={G.fields[player]} />

        <SelectedTokens
          tokens={selectedTokens}
          onClose={() => {
            this.setState({ selectedTokens: [] })
          }} />
      </div>
    )
  }
}

export default Player
