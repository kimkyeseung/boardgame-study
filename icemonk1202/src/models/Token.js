let tokenId = 0
export default class Token {
  id
  color
  playerId

  constructor({ color }) {
    this.id = `token-${tokenId++}`
    this.color = color
  }
}
