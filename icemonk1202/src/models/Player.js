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
