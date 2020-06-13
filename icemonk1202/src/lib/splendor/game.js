import { getCardData, getTokenData } from "./data"
import { LEVEL } from "./constant"
import DeckModel from "../../models/Deck"
import PlayerModel from "../../models/Player"

const cards = getCardData()
const buildDeckByLevel = (level) =>
  new DeckModel(
    level,
    cards.filter((card) => card.level === level)
  )
const buildPlayers = (playOrder) =>
  playOrder.reduce((acc, playerId) => {
    acc[playerId] = new PlayerModel()
    return acc
  }, {})

const Splendor = {
  name: "splendor",

  setup(ctx) {
    console.log(ctx)
    const devDeck1 = buildDeckByLevel(LEVEL.I)
    const devDeck2 = buildDeckByLevel(LEVEL.II)
    const devDeck3 = buildDeckByLevel(LEVEL.III)
    const nobleDeck = buildDeckByLevel(LEVEL.NOBLE)

    devDeck1.shuffle()
    devDeck2.shuffle()
    devDeck3.shuffle()
    nobleDeck.shuffle()

    const boardDevDeck1 = devDeck1.draw(4).reverse()
    const boardDevDeck2 = devDeck2.draw(4).reverse()
    const boardDevDeck3 = devDeck3.draw(4).reverse()
    const boardNobleDeck = nobleDeck.draw(ctx.numPlayers + 1).reverse()

    return {
      devDeck1,
      devDeck2,
      devDeck3,
      nobleDeck,
      boardDevDeck1,
      boardDevDeck2,
      boardDevDeck3,
      boardNobleDeck,
      boardTokens: getTokenData(ctx.numPlayers),
      players: buildPlayers(ctx.playOrder),
    }
  },

  moves: {
    getTokens(tokens) {},
  },

  turn: { moveLimit: 1 },

  // endIf: (G, ctx) => {
  //   if (IsVictory(G.cells)) {
  //     return { winner: ctx.currentPlayer }
  //   }
  //   if (G.cells.filter((c) => c === null).length === 0) {
  //     return { draw: true }
  //   }
  // },
}

export default Splendor
