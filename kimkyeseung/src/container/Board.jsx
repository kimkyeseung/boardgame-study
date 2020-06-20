import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/Card'
import Token from '../components/Token'
import SelectedTokens from './SelectedTokens'

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

const Wrapper = styled.div`
  display: flex;
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
      selectedTokens: []
    }
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.handleTokenClick = this.handleTokenClick.bind(this)
  }

  componentDidMount() {

  }

  handleSpaceClick(dev, index, grade) {
    const { replaceDevelopmentSpace, buyDevelopment } = this.props.moves
    replaceDevelopmentSpace({ index, grade })
    buyDevelopment(dev)
  }

  handleTokenClick(token) {
    const { selectedTokens } = this.state
    if (selectedTokens.includes(token) || token === 'yellow') {
      return
    }
    console.log({ token })
    this.setState({
      selectedTokens: [...selectedTokens, token]
    })
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

    const tokenIndex = ['yellow', 'black', 'red', 'green', 'blue', 'white']
    const turn = ctx.currentPlayer

    const { selectedTokens } = this.state
    return (
      <Wrapper>
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
        </div>
        <Token.Wrapper>
          {tokenIndex.map(token => (
            <Token
              key={token}
              color={token}
              count={G.tokens[token]}
              onClick={() => {
                this.handleTokenClick(token)
              }} />
          ))}
        </Token.Wrapper>
        <SelectedTokens tokens={selectedTokens} onClose={() => {
          this.setState({ selectedTokens: [] })
        }} />
      </Wrapper>
    )
  }
}

export default Board
