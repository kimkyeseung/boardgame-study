import { values, sum } from "../lib/util"
import { COLOR, CARD } from "../lib/constant"

let cardId = 0
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
    return sum(values(this.costs))
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

  constructor({ level, costs, donations, score }) {
    this.id = `card-${cardId++}`
    this.level = level
    this.costs = costs
    this.donations = donations
    this.score = score
  }
}
