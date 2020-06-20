import React, { Component } from 'react'

class Lobby extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="number" value={this.props.playerNum} onChange={ev => {
          const num = Number(ev.target.value)
          this.props.setPlayerNum(num)
        }} />
        <button onClick={ev => {
          ev.preventDefault()
          this.props.startGame()
        }}>시작하기</button>
      </div>
    )
  }
}

export default Lobby
