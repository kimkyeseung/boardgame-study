import { getCardData, getTokenData } from "./data"
import { LEVEL, COLOR } from "./constant"
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
    drawTokens(G, ctx, tokens) {
      Object.entries(tokens)
        .filter(([_, count]) => count)
        .forEach(([color, count]) => {
          Array(count)
            .fill()
            .forEach((_) => {
              const tokenIndex = G.boardTokens.findIndex(
                (token) => token.color === color
              )
              G.players[ctx.currentPlayer].tokens[color].push(
                ...G.boardTokens.splice(tokenIndex, 1)
              )
            })
        })
    },
    buyCard(G, ctx, card, index) {
      const player = G.players[ctx.currentPlayer]

      // 토큰 비용 지불
      Object.keys(COLOR).forEach((color) => {
        const realCost = card.costs[color] - player[color + "Donation"]
        const returnTokens = player.tokens[color].splice(0, realCost)
        G.boardTokens.push(...returnTokens)
      })

      // 플레이어에게 카드 전달
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const deck = G[`devDeck${level}`]
      const boardDeck = G[`boardDevDeck${level}`]
      boardDeck.splice(boardDeck.indexOf(card), 1)
      player.boughtCards.push(card)

      // 덱에서 카드 1장 꺼내서 빈자리 채움
      boardDeck.splice(index, 0, ...deck.draw())
    },
    keepCard(G, ctx, card, index) {
      const player = G.players[ctx.currentPlayer]

      // 토큰 비용 지불
      Object.keys(COLOR).forEach((color) => {
        const realCost = card.costs[color] - player[color + "Donation"]
        const returnTokens = player.tokens[color].splice(0, realCost)
        G.boardTokens.push(...returnTokens)
      })

      // 플레이어에게 카드 전달
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const deck = G[`devDeck${level}`]
      const boardDeck = G[`boardDevDeck${level}`]
      boardDeck.splice(boardDeck.indexOf(card), 1)
      player.keptCards.push(card)

      // 덱에서 카드 1장 꺼내서 빈자리 채움
      boardDeck.splice(index, 0, ...deck.draw())
    },
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (G.players[ctx.currentPlayer].score >= 15) {
      alert("승리", ctx.currentPlayer)
      return { winner: ctx.currentPlayer }
    }
  },
}

export default Splendor
