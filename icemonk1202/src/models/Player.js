import { COLOR } from "../lib/splendor/constant"

let playerId = 0
export default class Player {
  constructor(name) {
    this.id = `player-${playerId++}`
    this.name = name || `player${playerId}`
  }

  id = null
  name = ""
  keptCards = []
  boughtCards = []
  tokens = []

  get score() {
    /**
     * @TODO 보유 카드로 스코어 계산
     */
    return boughtCards
  }

  get donation() {
    /**
     * @TODO 보유 카드로 기부량 계산
     */
    return boughtCards
  }

  get whiteToken() {
    return this.tokens.filter((token) => token.color === COLOR.white).length
  }
  get blueToken() {
    return this.tokens.filter((token) => token.color === COLOR.blue).length
  }
  get greenToken() {
    return this.tokens.filter((token) => token.color === COLOR.green).length
  }
  get redToken() {
    return this.tokens.filter((token) => token.color === COLOR.red).length
  }
  get blackToken() {
    return this.tokens.filter((token) => token.color === COLOR.black).length
  }
  get yelloToken() {
    return this.tokens.filter((token) => token.color === COLOR.yello).length
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
