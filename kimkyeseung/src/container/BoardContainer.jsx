import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/Card'
import Token from '../components/Token'
import Layout from '../components/Layout'
import BoardLayout from '../components/BoardLayout'
import SelectedTokens from '../components/SelectedTokens'
import SelectedDevelopment from '../components/SelectedDevelopment'
import Player from './Player'
import { Link } from '../../../lib/utils'

const Header = styled.header``

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
    this.state = {
      confirmable: false,
      focusedDevelopment: {}
    }
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.deselectDevelopment = this.deselectDevelopment.bind(this)
    this.handleTokenClick = this.handleTokenClick.bind(this)
    this.confirmSelectedToken = this.confirmSelectedToken.bind(this)
    this.cancelSelectedToken = this.cancelSelectedToken.bind(this)
    this.deselectToken = this.deselectToken.bind(this)
  }

  componentDidMount() {

  }

  handleSpaceClick(dev, index, grade) {
    const { G, ctx, moves } = this.props
    const { fields } = G
    const { currentPlayer } = ctx
    const { buyDevelopment, selectDevelopment } = moves
    const { hand } = fields[`player${currentPlayer}`]

    const { focusedDevelopment: current } = this.state
    const next = { index, grade }
    selectDevelopment(dev, current, next, (development) => {
      this.setState({
        focusedDevelopment: {
          grade,
          index,
          development
        }
      })
    })

    // buyDevelopment(dev, index, grade)
  }

  deselectDevelopment() {
    const { G, ctx, moves } = this.props
    const { deselectDevelopment } = moves

    const { focusedDevelopment: current } = this.state
    deselectDevelopment(current, () => {
      this.setState({ focusedDevelopment: {} })
    })
  }

  handleTokenClick(token) {
    if (token === 'yellow') {
      return
    }
    const { G, ctx, moves } = this.props
    const { selectToken } = moves
    selectToken(token, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  deselectToken(index, cb) {
    const { G, ctx, moves } = this.props
    const { deselectToken } = moves
    deselectToken(index, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  confirmSelectedToken() {
    const { G, ctx, moves } = this.props
    const { selectToken, getTokens } = moves
    getTokens(() => {
      this.setState({
        confirmable: false
      })
    })
  }

  cancelSelectedToken() {
    const { G, ctx, moves } = this.props
    const { cancelSelectedToken } = moves
    cancelSelectedToken(() => {
      this.setState({
        confirmable: false
      })
    })
  }

  render() {
    const { G, moves, ctx } = this.props
    const { currentPlayer } = ctx
    const {
      dev10, dev11, dev12, dev13,
      dev20, dev21, dev22, dev23,
      dev30, dev31, dev32, dev33
    } = G.board
    // console.log(G.fields)
    const developmentOne = [dev10, dev11, dev12, dev13]
    const developmentTwo = [dev20, dev21, dev22, dev23]
    const developmentThree = [dev30, dev31, dev32, dev33]

    const tokenIndex = ['yellow', 'black', 'red', 'green', 'blue', 'white']
    const { selectedTokens, fields } = G
    const { hand } = fields[`player${currentPlayer}`]
    const { confirmable, focusedDevelopment } = this.state

    return (
      <>
        <Layout
          Header={
            <Header>
              <Link to="/">HOME</Link>
              <Link to="/kimkyeseung">로비</Link>
            </Header>
          }
          LeftPanel={
            <div>
              {Object.keys(G.fields).map(player => (
                <Player
                  key={player}
                  field={G.fields[player]}
                  G={G}
                  selectedTokens={selectedTokens}
                  player={player}
                  ctx={ctx} />
              ))}
            </div>
          }
          Main={
            <BoardLayout
              Developments={
                <>
                  <Row>
                    {developmentThree.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 3)
                      }} grade={3} dev={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentTwo.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 2)
                      }} grade={2} dev={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentOne.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 1)
                      }} grade={1} dev={dev} />
                    ))}
                  </Row>
                </>
              }
              Tokens={
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
              }
              Nobles={
                <div>Noble~</div>
              }
            />
          }
          RightPanel={<div>Right</div>}
          Footer={<div className="hand">
            <SelectedTokens
              message="가져올 토큰을 선택하세요"
              tokens={hand.tokens}
              confirmable={confirmable}
              deselectToken={this.deselectToken}
              confirmSelectedToken={this.confirmSelectedToken}
              onClose={this.cancelSelectedToken} />
            {focusedDevelopment && <SelectedDevelopment
              message="개발카드를 어떻게 하시겠습니까?"
              deselectDevelopment={this.deselectDevelopment}
              development={focusedDevelopment.development}
              onClose={() => { }} />}
          </div>} />
      </>
    )
  }
}

export default Board
