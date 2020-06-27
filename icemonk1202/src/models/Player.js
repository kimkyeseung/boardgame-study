import { COLOR } from "../lib/constant"

let playerId = 0
const add = (a, b) => a + b
export default class Player {
  constructor(name) {
    this.id = `player-${playerId++}`
    this.name = name || `player${playerId}`
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
    return this.boughtCards.map((card) => card.score).reduce(add, 0)
  }

  get donation() {
    return this.boughtCards
      .map((card) => card.validDonation)
      .reduce((acc, color) => {
        acc[color] ? acc[color]++ : (acc[color] = 1)
        return acc
      }, {})
  }

  get whiteToken() {
    return this.tokens.white.filter((token) => token.color === COLOR.white)
      .length
  }
  get blueToken() {
    return this.tokens.blue.filter((token) => token.color === COLOR.blue).length
  }
  get greenToken() {
    return this.tokens.green.filter((token) => token.color === COLOR.green)
      .length
  }
  get redToken() {
    return this.tokens.red.filter((token) => token.color === COLOR.red).length
  }
  get blackToken() {
    return this.tokens.black.filter((token) => token.color === COLOR.black)
      .length
  }
  get yelloToken() {
    return this.tokens.yello.filter((token) => token.color === COLOR.yello)
      .length
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
