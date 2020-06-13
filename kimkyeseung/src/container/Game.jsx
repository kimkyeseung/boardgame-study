import React, { Component } from 'react'
import { Client } from 'boardgame.io/react'

import Board from '../components/Board'
import { Splendor } from '../lib'

class Game extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
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
