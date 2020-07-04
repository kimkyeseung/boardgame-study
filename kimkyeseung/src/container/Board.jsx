import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/Card'
import Token from '../components/Token'
import Layout from '../components/Layout'
import BoardLayout from '../components/BoardLayout'
import Field from './Field'
import { Link } from '../../../lib/utils'

const Winner = styled.div`
  margin-top: 25px;
  width: 168px;
  text-align: center;
`

const Header = styled.header``

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
    this.selectToken = this.selectToken.bind(this)
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
    const { selectToken, getTokens } = this.props.moves
    selectToken(token)
  } 

  selectToken(token, cb) {
    console.log(token)
    this.setState({
      selectedTokens: [...selectedTokens, token]
    }, cb)
  }

  deselectToken(token, cb) {
    this.setState(prevState => {
      const index = prevState.selectedTokens.findIndex(token)
      if (index === -1) {
        return alert('문제가 발생하였습니다.')
      }
      return { selectedTokens: prevState.selectedTokens.splice(index, 1) }
    }, cb)
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
    const { selectedTokens } = this.state
    return (
      <>
        <Layout
          Header={
            <Header>
              <Link to="/">HOME</Link>
            </Header>
          }
          LeftPanel={
            <div>
              {Object.keys(G.fields).map(player => (
                <Field player={player} key={player} field={G.fields[player]} G={G} ctx={ctx} />
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
          Footer={<div>Footer</div>} />
      </>
    )
  }
}

export default Board
