import React, { Component } from "react"
import PropTypes from "prop-types"
import { Card, Nav, Score, CostCover, Cost } from "./styled/NobleCard"
import CardModel from "../models/Card"

const getCosts = (validCosts) =>
  validCosts
    .reverse()
    .map(({ color, count }) => <Cost color={color}>{count}</Cost>)

class NobleCard extends Component {
  static propTypes = {
    card: PropTypes.instanceOf(CardModel),
  }

  render() {
    const { card } = this.props
    return (
      <Card cardId={this.props.card.id}>
        <Nav>
          <Score>{card.score}</Score>
          <CostCover>{getCosts(card.validCosts)}</CostCover>
        </Nav>
      </Card>
    )
  }
}

export default NobleCard
