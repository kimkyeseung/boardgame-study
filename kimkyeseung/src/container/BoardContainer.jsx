import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/Card'
import Noble from '../components/Noble'
import Token from '../components/Token'
import Layout from '../components/Layout'
import BoardLayout from '../components/BoardLayout'
import TokenController from '../components/TokenController'
import DevelopmentController from '../components/DevelopmentController'
import Player from './Player'
import { Link } from '../../../lib/utils'

const Header = styled.header``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
`

class BoardContainer extends Component {
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
      focusedDevelopment: {},
      tokenOverloaded: 0
    }
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.deselectDevelopment = this.deselectDevelopment.bind(this)
    this.buySelectedDevelopment = this.buySelectedDevelopment.bind(this)
    this.reserveSelectedDevelopment = this.reserveSelectedDevelopment.bind(this)
    this.handleTokenClick = this.handleTokenClick.bind(this)
    this.confirmSelectedToken = this.confirmSelectedToken.bind(this)
    this.cancelSelectedToken = this.cancelSelectedToken.bind(this)
    this.deselectToken = this.deselectToken.bind(this)
    this.returnToken = this.returnToken.bind(this)
  }

  componentDidUpdate({ G }) {
    console.log(G)
  }

  handleSpaceClick(dev, index, grade) {
    const { moves } = this.props
    const { selectDevelopment } = moves

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
  }

  deselectDevelopment() {
    const { moves } = this.props
    const { deselectDevelopment } = moves
    const { focusedDevelopment } = this.state

    deselectDevelopment(focusedDevelopment, () => {
      this.setState({ focusedDevelopment: {} })
    })
  }

  buySelectedDevelopment() {
    const { moves } = this.props
    const { buyDevelopment } = moves
    const { focusedDevelopment } = this.state

    buyDevelopment(focusedDevelopment, () => {
      this.setState({ focusedDevelopment: {} })
    })
  }

  reserveSelectedDevelopment() {
    const { moves } = this.props
    const { reserveDevelopment } = moves
    const { focusedDevelopment } = this.state

    reserveDevelopment(focusedDevelopment, (tokenOverloaded = 0) => {
      this.setState({
        focusedDevelopment: {},
        tokenOverloaded
      })
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

  deselectToken(index) {
    const { G, ctx, moves } = this.props
    const { deselectToken } = moves
    deselectToken(index, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  confirmSelectedToken() {
    const { G, ctx, moves } = this.props
    const { selectToken, getTokens } = moves
    getTokens((tokenOverloaded = 0) => {
      this.setState({
        confirmable: false,
        tokenOverloaded
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

  returnToken(token) {
    const { G, ctx, moves } = this.props
    const { returnTokens } = moves
    returnTokens(token, () => {
      this.setState({
        tokenOverloaded: 0
      })
    })
  }

  render() {
    const { G, ctx } = this.props
    const { currentPlayer } = ctx
    const { board, tokenStore, selectedTokens, fields, nobleTiles } = G
    const { confirmable, focusedDevelopment, tokenOverloaded } = this.state
    console.log({ nobleTiles })
    const {
      dev10, dev11, dev12, dev13,
      dev20, dev21, dev22, dev23,
      dev30, dev31, dev32, dev33
    } = board
    const developmentOne = [dev10, dev11, dev12, dev13]
    const developmentTwo = [dev20, dev21, dev22, dev23]
    const developmentThree = [dev30, dev31, dev32, dev33]

    const { hand, tokenAssets } = fields[`player${currentPlayer}`]

    const tokenIndex = ['yellow', 'black', 'red', 'green', 'blue', 'white']

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
                      <Card key={dev} onClick={ev => {
                        this.handleSpaceClick(dev, index, 3)
                      }} grade={3} dev={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentTwo.map((dev, index) => (
                      <Card key={dev} onClick={ev => {
                        this.handleSpaceClick(dev, index, 2)
                      }} grade={2} dev={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentOne.map((dev, index) => (
                      <Card key={dev} onClick={ev => {
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
                      count={tokenStore[token]}
                      onClick={() => {
                        this.handleTokenClick(token)
                      }} />
                  ))}
                </Token.Wrapper>
              }
              Nobles={
                <Noble.Wrapper>
                  {nobleTiles.map(noble => (
                    <Noble key={noble} noble={noble} onClick={() => { }} />
                  ))}
                </Noble.Wrapper>
              }
            />
          }
          RightPanel={<div>Right</div>}
          Footer={<div className="hand">
            {hand.tokens.length
              ? <TokenController
                message="가져올 토큰을 선택하세요"
                tokens={hand.tokens}
                confirmable={confirmable}
                onTokenClick={this.deselectToken}
                confirmSelectedToken={this.confirmSelectedToken}
                onClose={this.cancelSelectedToken} />
              : null}
            {focusedDevelopment && <DevelopmentController
              message="개발카드를 어떻게 하시겠습니까?"
              deselectDevelopment={this.deselectDevelopment}
              buySelectedDevelopment={this.buySelectedDevelopment}
              reserveSelectedDevelopment={this.reserveSelectedDevelopment}
              development={focusedDevelopment.development} />}
            {tokenOverloaded
              ? <TokenController
                message="초과한 토큰을 반납하세요"
                tokens={tokenAssets}
                deselectToken={this.deselectToken}
                onTokenClick={this.returnToken}
                confirmSelectedToken={this.confirmSelectedToken}
                onClose={this.cancelSelectedToken} />
              : null}
          </div>} />
      </>
    )
  }
}

export default BoardContainer
