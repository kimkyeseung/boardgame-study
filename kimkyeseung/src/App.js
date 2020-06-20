import React, { Component } from 'react'
import Lobby from './container/Lobby'
import Game from './container/Game'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNum: 4, //0
      config: {},
      isStart: true //false
    }
    this.setPlayerNum = this.setPlayerNum.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  setPlayerNum(num) {
    this.setState({ playerNum: num })
  }

  startGame() {
    const { playerNum } = this.state
    if (playerNum > 4 || playerNum < 2) {
      return alert('최소 2인이상 4인 이하로 입력해주세요.')
    }
    this.setState({ isStart: true })
  }

  render() {
    const { isStart, playerNum } = this.state
    return (
      isStart
        ? <Game playerNum={playerNum} />
        : <Lobby
          playerNum={playerNum}
          setPlayerNum={this.setPlayerNum}
          startGame={this.startGame} />
    )
  }
}

export default App
