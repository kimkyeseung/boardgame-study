import { add } from "../lib/splendor/util"
import { COLOR, CARD } from "../lib/splendor/constant"

export default class Card {
  id
  level
  costs = {
    [COLOR.white]: 0,
    [COLOR.blue]: 0,
    [COLOR.green]: 0,
    [COLOR.red]: 0,
    [COLOR.black]: 0,
  }
  donations = {
    [COLOR.white]: 0,
    [COLOR.blue]: 0,
    [COLOR.green]: 0,
    [COLOR.red]: 0,
    [COLOR.black]: 0,
  }
  score = 0

  status = CARD.STATUS.NOT_USE
  playerId

  get totalCost() {
    return Object.values(this.costs).reduce(add, 0)
  }

  get validCosts() {
    return Object.entries(this.costs)
      .filter(([_, count]) => count)
      .map(([color, count]) => ({ color, count }))
  }
  get validDonation() {
    const donation = Object.entries(this.donations).find(([_, count]) => count)
    return donation && donation[0]
  }

  constructor({ id, level, costs, donations, score }) {
    this.id = id
    this.level = level
    this.costs = costs
    this.donations = donations
    this.score = score
  }
}
