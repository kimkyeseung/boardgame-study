import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Space from './Space'
import developmentCards from '../../assets/developmentCards.json'

const Winner = styled.div`
  margin-top: 25px;
  width: 168px;
  text-align: center;
`

const Cell = styled.td`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: #555;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 3px solid #aaa;
  background: #fff;
  &.active {
    cursor: pointer;
    background: #eeffe9;
    &:hover {
      background: #eeffff;
    }
  }
`

class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  }
  constructor(props) {
    super(props)
    this.state = {
      boards: {
        developmentOne: [],
        developmentTwo: [],
        developmentThree: []
      },
      tokens: {
        red: 0,
        green: 0,
        blue: 0,
        white: 0,
        black: 0,
        yellow: 0
      }
    }
  }

  componentDidMount() {

  }

  onClick = id => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id)
    }
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    let tbody = [];
    for (let i = 0; i < 4; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <Cell
            key={id}
            className={this.isActive(id) ? 'active' : ''}
            onClick={() => this.onClick(id)}
          >
            {this.props.G.cells[id]}
          </Cell>
        )
      }
      tbody.push(<tr key={i}>{cells}</tr>)
    }

    let winner = null
    if (this.props.ctx.gameover) {
      winner = this.props.ctx.gameover.winner !== undefined
        ? <Winner>Winner: {this.props.ctx.gameover.winner}</Winner>
        : <Winner>Draw!</Winner>
    }

    return (
      <div>
        {}
        {winner}
      </div>
    )
  }
}

export default Board
