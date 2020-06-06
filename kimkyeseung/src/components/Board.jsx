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
const Row = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
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
    this.props.moves.buyDevelopment(id)
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {

    // let winner = null
    // if (this.props.ctx.gameover) {
    //   winner = this.props.ctx.gameover.winner !== undefined
    //     ? <Winner>Winner: {this.props.ctx.gameover.winner}</Winner>
    //     : <Winner>Draw!</Winner>
    // }
    const { G, moves, ctx } = this.props
    const { developmentOne, developmentTwo, developmentThree } = G.board
    return (
      <div>
        <Row>
          {developmentThree.map(dev => <Space key={dev.id} onClick={ev => {
            moves.buyDevelopment(dev.id)
          }} grade={3} development={dev} />)}
        </Row>
        <Row>
          {developmentTwo.map(dev => <Space key={dev.id}  grade={2} development={dev} />)}
        </Row>
        <Row>
          {developmentOne.map(dev => <Space key={dev.id}  grade={1} development={dev} />)}
        </Row>
      </div>
    )
  }
}

export default Board
