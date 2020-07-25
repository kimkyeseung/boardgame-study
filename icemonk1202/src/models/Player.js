import { COLOR } from "../lib/constant"
import { sum, get } from "../lib/util"

let playerId = 0
export default class Player {
  constructor(id, name) {
    this.id = id || `player-${playerId++}`
    this.name = name || id || `player${playerId}`
  }

  id = null
  name = ""
  keptCards = []
  boughtCards = []
  tokens = {
    [COLOR.white]: [],
    [COLOR.blue]: [],
    [COLOR.green]: [],
    [COLOR.red]: [],
    [COLOR.black]: [],
    [COLOR.yellow]: [],
  }

  get score() {
    return sum(this.boughtCards.map(get("score")))
  }

  get donation() {
    return this.boughtCards
      .map((card) => card.validDonation)
      .reduce((acc, color) => {
        acc[color] ? acc[color]++ : (acc[color] = 1)
        return acc
      }, {})
  }

  get whiteTokenCount() {
    return this.tokens[COLOR.white].filter(
      (token) => token.color === COLOR.white
    ).length
  }
  get blueTokenCount() {
    return this.tokens[COLOR.blue].filter((token) => token.color === COLOR.blue)
      .length
  }
  get greenTokenCount() {
    return this.tokens[COLOR.green].filter(
      (token) => token.color === COLOR.green
    ).length
  }
  get redTokenCount() {
    return this.tokens[COLOR.red].filter((token) => token.color === COLOR.red)
      .length
  }
  get blackTokenCount() {
    return this.tokens[COLOR.black].filter(
      (token) => token.color === COLOR.black
    ).length
  }
  get yellowTokenCount() {
    return this.tokens[COLOR.yellow].filter(
      (token) => token.color === COLOR.yellow
    ).length
  }

  get totalTokenCount() {
    return (
      this.whiteTokenCount +
      this.blueTokenCount +
      this.greenTokenCount +
      this.redTokenCount +
      this.blackTokenCount +
      this.yellowTokenCount
    )
  }

  get whiteDonation() {
    return this.boughtCards.filter((card) => card.validDonation === COLOR.white)
      .length
  }
  get blueDonation() {
    return this.boughtCards.filter((card) => card.validDonation === COLOR.blue)
      .length
  }
  get greenDonation() {
    return this.boughtCards.filter((card) => card.validDonation === COLOR.green)
      .length
  }
  get redDonation() {
    return this.boughtCards.filter((card) => card.validDonation === COLOR.red)
      .length
  }
  get blackDonation() {
    return this.boughtCards.filter((card) => card.validDonation === COLOR.black)
      .length
  }

  keepCard(card, yelloToken) {
    this.keptCards.push(card)
    this.tokens.push(yelloToken)
  }

  buyCard(card) {
    this.boughtCards.push(card)
    /**
     * @TODO 보유 Token, Donnation 계산하여 토큰 차감
     */
  }
}
