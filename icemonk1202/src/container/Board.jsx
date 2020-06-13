import React, { Component } from "react"
import PropTypes from "prop-types"

import DevCard from "../components/splendor/DevCard"
import NobleCard from "../components/splendor/NobleCard"

import TokenBoard from "./TokenBoard"

import styled from "styled-components"

const BoardCover = styled.div`
  display: flex;
  flex-grow: 0;
`

const DevArea = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  width: 60%;
`
const NobleArea = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
`

const DevDeckCover1 = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  padding: 16px;
`
const DevDeckCover2 = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 16px;
`
const DevDeckCover3 = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 16px;
`
const NobleDeckCover = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`

class Board extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  }

  state = {}

  drawTokens = (selectedTokens) => {
    console.log(selectedTokens)
  }

  render() {
    const getDevCards = (cards = []) =>
      cards.map((card) => <DevCard key={card.id} card={card}></DevCard>)
    const getNobleCards = (cards = []) =>
      cards.map((card) => <NobleCard key={card.id} card={card}></NobleCard>)
    const getTokens = (token) =>
      token.map((token) => <Token key={token.id} color={token.color}></Token>)

    return (
      <BoardCover>
        <DevArea>
          <DevDeckCover1>
            <DevCard></DevCard>
            {getDevCards(this.props.G.boardDevDeck1)}
          </DevDeckCover1>
          <DevDeckCover2>
            <DevCard></DevCard>
            {getDevCards(this.props.G.boardDevDeck2)}
          </DevDeckCover2>
          <DevDeckCover3>
            <DevCard></DevCard>
            {getDevCards(this.props.G.boardDevDeck3)}
          </DevDeckCover3>
        </DevArea>
        <NobleArea>
          <NobleDeckCover>
            {getNobleCards(this.props.G.boardNobleDeck)}
          </NobleDeckCover>
        </NobleArea>
        <TokenBoard
          tokens={this.props.G.boardTokens}
          drawTokens={this.drawTokens}
        ></TokenBoard>
      </BoardCover>
    )
  }
}

export default Board
