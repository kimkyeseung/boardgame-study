export default class Deck {
  level
  cards

  constructor(level, cards) {
    this.level = level
    this.cards = cards
  }
  shuffle() {
    this.cards.sort(() => Math.random() - 0.5)
  }
  draw(count = 1) {
    return this.cards.splice(this.cards.length - count - 1, count)
  }
}
