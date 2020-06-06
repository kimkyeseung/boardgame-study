import React, { Component } from 'react'

class Lobby extends Component {
  render() {
    return (
      <div>
        <input type="number" onChange={ev => {
          this.props.setPlayerNum()
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
