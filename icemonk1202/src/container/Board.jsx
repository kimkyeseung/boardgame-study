import React, { Component } from "react"
import PropTypes from "prop-types"

import DevCard from "../components/DevCard"
import NobleCard from "../components/NobleCard"
import Modal from "../components/Modal"

import TokenBoard from "./TokenBoard"
import PlayerBoard from "./PlayerBoard"

import styled from "styled-components"
const BoardCover = styled.div`
  display: flex;
  flex-grow: 0;
  height: 90vh;
`

const DevArea = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  justify-content: space-around;
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
const ActionButton = styled.button`
  all: unset;
  width: 400px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  background: skyblue;
  color: white;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(1.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
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

  state = {
    selectedCard: {},
    selectedCardIndex: -1,
    actionModalShow: false,
  }

  onKeydownModal = (e) => {
    if (!this.state.actionModalShow) return

    if (e.key === "b") return this.buyCard()
    if (e.key === "k") return this.keepCard()
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.onKeydownModal)
  }
  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.onKeydownModal)
  }

  onClickDevCard = (card, index) => {
    this.setState(
      {
        selectedCard: card,
        selectedCardIndex: index,
      },
      this.openActionModal
    )
  }

  openActionModal = () => {
    this.setState({ actionModalShow: true })
  }
  closeActionModal = () => {
    this.setState({ actionModalShow: false })
  }

  move = (method, ...args) => {
    this.closeActionModal()
    this.props.moves[method](...args)
  }

  drawTokens = (tokens) => {
    this.move("drawTokens", tokens)
  }
  buyCard = () => {
    this.move("buyCard", this.state.selectedCard, this.state.selectedCardIndex)
  }
  keepCard = () => {
    this.move("keepCard", this.state.selectedCard, this.state.selectedCardIndex)
  }

  get players() {
    return this.props.ctx.playOrder.map((id) => this.props.G.players[id])
  }

  get currentPlayer() {
    return this.props.G.players?.[this.props.ctx.currentPlayer]
  }

  render() {
    const getDevCards = (cards = []) =>
      cards.map((card, index) => (
        <DevCard
          key={card.id}
          card={card}
          onClick={this.onClickDevCard}
          index={index}
        ></DevCard>
      ))
    const getNobleCards = (cards = []) =>
      cards.map((card) => <NobleCard key={card.id} card={card}></NobleCard>)

    return (
      <>
        <BoardCover>
          <DevArea>
            <DevDeckCover1>
              <DevCard key={"deck1"}></DevCard>
              {getDevCards(this.props.G.boardDevDeck1)}
            </DevDeckCover1>
            <DevDeckCover2>
              <DevCard key={"deck2"}></DevCard>
              {getDevCards(this.props.G.boardDevDeck2)}
            </DevDeckCover2>
            <DevDeckCover3>
              <DevCard key={"deck3"}></DevCard>
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
        <PlayerBoard
          currentPlayer={this.currentPlayer}
          players={this.players}
        ></PlayerBoard>
        {this.state.actionModalShow && (
          <Modal close={this.closeActionModal}>
            <ActionButton onClick={this.buyCard}>Buy</ActionButton>
            <ActionButton onClick={this.keepCard}>Keep</ActionButton>
          </Modal>
        )}
      </>
    )
  }
}

export default Board
