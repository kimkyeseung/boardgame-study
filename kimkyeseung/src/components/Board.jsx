import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './Card'

const Winner = styled.div`
  margin-top: 25px;
  width: 168px;
  text-align: center;
`

const Row = styled.div`
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
    this.state = {}
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
  }

  componentDidMount() {

  }

  handleSpaceClick(dev, index, grade) {
    console.log(this.props)
    this.props.moves.replaceDevelopmentSpace({ index, grade })
    this.props.moves.buyDevelopment(dev)
  }

  render() {
    const { G, moves, ctx } = this.props
    const {
      dev10, dev11, dev12, dev13,
      dev20, dev21, dev22, dev23,
      dev30, dev31, dev32, dev33
    } = G.board
    const developmentOne = [dev10, dev11, dev12, dev13]
    const developmentTwo = [dev20, dev21, dev22, dev23]
    const developmentThree = [dev30, dev31, dev32, dev33]
    const turn = ctx.currentPlayer
    return (
      <div>
        <Row>
          {developmentThree.map((dev, index) => (
            <Card key={dev ? dev.id : index} onClick={ev => {
              this.handleSpaceClick(dev, index, 3)
            }} grade={3} development={dev} />
          ))}
        </Row>
        <Row>
          {developmentTwo.map((dev, index) => (
            <Card key={dev ? dev.id : index} onClick={ev => {
              this.handleSpaceClick(dev, index, 2)
            }} grade={2} development={dev} />
          ))}
        </Row>
        <Row>
          {developmentOne.map((dev, index) => (
            <Card key={dev ? dev.id : index} onClick={ev => {
              this.handleSpaceClick(dev, index, 1)
            }} grade={1} development={dev} />
          ))}
        </Row>
        <div>

        </div>
      </div>
    )
  }
}

export default Board
