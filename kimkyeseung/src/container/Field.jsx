import React, { Component } from 'react'
import SelectedTokens from './SelectedTokens'
import FieldSummary from '../components/FieldSummary'

class Field extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { ctx, player, G, selectedTokens } = this.props
    console.log({ player })
    const { currentPlayer } = ctx
    return (
      <div>
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

export default Field
