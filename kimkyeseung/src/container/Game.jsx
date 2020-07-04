import React, { Component } from 'react'
import { Client } from 'boardgame.io/react'

import Board from './Board'
import { game } from '../lib'

class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Splendor = game(this.props.playerNames)
    const SplendorGame = Client({
      game: Splendor,
      board: Board,
      numPlayers: this.props.playerNum,
    })
    return (
      <SplendorGame />
    )
  }
}

export default Game
