import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Card,
  Header,
  Score,
  Donnation,
  CostCover,
  Cost,
} from "./styled/DevCard"
import CardModel from "../models/Card"
import { getId } from "../lib/util"

const getCosts = (validCosts) =>
  validCosts.reverse().map(({ color, count }) => (
    <Cost key={`cost-${getId()}`} color={color}>
      {count}
    </Cost>
  ))

class DevCard extends Component {
  static propTypes = {
    index: PropTypes.number,
    card: PropTypes.instanceOf(CardModel),
    onClick: PropTypes.func,
  }

  render() {
    const { card, onClick } = this.props
    if (!card) return <Card></Card>

    return (
      <Card
        cardId={this.props.card.id}
        onClick={() => onClick(card, this.props.index)}
      >
        <Header>
          <Score>{card.score ? card.score : ""}</Score>
          <Donnation color={card.validDonation}></Donnation>
        </Header>
        <CostCover>{getCosts(card.validCosts)}</CostCover>
      </Card>
    )
  }
}

export default DevCard
