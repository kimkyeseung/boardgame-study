import React, { Component } from 'react'
import { Client } from 'boardgame.io/react'
import { Splendor } from './lib'
import Board from './components/Board'
import Lobby from './container/Lobby'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNum: 0,
      config: {},
      isStart: false
    }
    this.setPlayerNum = this.setPlayerNum.bind(this)
    this.setGame = this.setGame.bind(this)
  }

  setPlayerNum(num) {
    this.setState({ playerNum: num })
  }

  setGame(playerNum) {
    return Client({
      game: Splendor,
      board: Board,
      numPlayers: playerNum,
    })
  }

  render() {
    const { isStart, playerNum } = this.state
    const Game = this.setGame(playerNum)
    return (
      isStart ? <Game /> : <Lobby setPlayerNum={this.setPlayerNum} startGame={() => {
        this.setState({ isStart: true })
      }} />
    )
  }
}

export default App
