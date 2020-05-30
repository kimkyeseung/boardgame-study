import React, { Component } from "react"
import PropTypes from "prop-types"
import DevCard from "../components/splendor/DevCard"
import NobleCard from "../components/splendor/NobleCard"
import Token from "../components/splendor/Token"

import { LEVEL } from "../lib/splendor/constant"
import { getCardData } from "../lib/splendor/data"

class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  }

  render() {
    const getDevCards = (cards) =>
      cards.map((card) => <DevCard card={card}></DevCard>)
    const getNobleCards = (cards) =>
      cards.map((card) => <NobleCard card={card}></NobleCard>)

    return (
      <div>
        <Token color="green"></Token>
        <br />
        <br />
        <DevCard card={this.props.G.devCards[55]}></DevCard>
        <br />
        <NobleCard card={this.props.G.nobleCards[0]}></NobleCard>
        {/* {getNobleCards(this.props.G.nobleCards)}
        {getDevCards(this.props.G.devCards)} */}
      </div>
    )
  }
}

export default Board
