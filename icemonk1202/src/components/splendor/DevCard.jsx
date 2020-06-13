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
import CardModel from "../../models/Card"

const getCosts = (validCosts) =>
  validCosts
    .reverse()
    .map(({ color, count }) => <Cost color={color}>{count}</Cost>)

class DevCard extends Component {
  static propTypes = {
    card: PropTypes.instanceOf(CardModel),
  }

  render() {
    const { card } = this.props
    if (!card) return <Card></Card>

    return (
      <Card>
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
