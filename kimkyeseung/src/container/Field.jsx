import React, { Component } from 'react'
import SelectedTokens from './SelectedTokens'
import FieldSummary from '../components/FieldSummary'

class Field extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props)
    const { ctx, player, G } = this.props
    const { currentPlayer } = ctx
    return (
      <div>
        <FieldSummary
          active={player === `player${currentPlayer}`}
          field={G.fields[player]} />
      </div>
    )
  }
}

export default Field
