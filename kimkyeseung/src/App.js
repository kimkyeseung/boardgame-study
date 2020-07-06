import React, { Component } from 'react'
import Lobby from './container/LobbyContainer'
import Router from 'next/router'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNum: 2,
      config: {},
      playerNames: ['0', '1', '2', '3'],
      isStart: false
    }
    this.setPlayerNum = this.setPlayerNum.bind(this)
    this.setPlayerName = this.setPlayerName.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  setPlayerNum(num) {
    this.setState({ playerNum: num })
  }

  setPlayerName(name, index) {
    this.setState(({ playerNames }) => {
      const next = [...playerNames]
      next[index] = name
      console.log({ next, name })
      return { playerNames: next }
    })
  }

  startGame() {
    const { playerNum } = this.state
    if (playerNum > 4 || playerNum < 2) {
      return alert('최소 2인이상 4인 이하로 입력해주세요.')
    }
    this.setState({ isStart: true })
  }

  render() {
    const { isStart, playerNum, playerNames } = this.state
    if (isStart) {
      Router.push({
        pathname: '/kimkyeseung/splendor',
        query: {
          gameId: new Date().getTime(),
          players: playerNames.slice(0, playerNum)
        }
      })
      return null
    }
    return (
      <Lobby
        playerNum={playerNum}
        setPlayerNum={this.setPlayerNum}
        setPlayerName={this.setPlayerName}
        playerNames={playerNames}
        startGame={this.startGame} />
    )
  }
}

export default App
