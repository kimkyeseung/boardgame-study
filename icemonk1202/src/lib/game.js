import { INVALID_MOVE } from "boardgame.io/core"
import { getCardData, getTokenData } from "./data"
import { LEVEL, COLOR } from "./constant"
import DeckModel from "../models/Deck"
import PlayerModel from "../models/Player"
import { pipe, go, range, last } from "./util"

const cards = getCardData()
const buildDeckByLevel = (level) =>
  new DeckModel(
    level,
    cards.filter((card) => card.level === level)
  )
const buildPlayers = (playOrder) =>
  playOrder.reduce((acc, playerId) => {
    acc[playerId] = new PlayerModel(playerId)
    return acc
  }, {})

const countLack = (player, card) => {
  let totalLackCount = 0

  for (const color of Object.keys(COLOR)) {
    const realCost = card.costs[color] - player[color + "Donation"]
    totalLackCount += Math.max(realCost - player[color + "TokenCount"], 0)
  }

  return totalLackCount
}

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

    const openedDevCards1 = devDeck1.draw(4).reverse()
    const openedDevCards2 = devDeck2.draw(4).reverse()
    const openedDevCards3 = devDeck3.draw(4).reverse()
    const boardNobleDeck = nobleDeck.draw(ctx.numPlayers + 1).reverse()

    return {
      devDeck1,
      devDeck2,
      devDeck3,
      nobleDeck,
      openedDevCards1,
      openedDevCards2,
      openedDevCards3,
      boardNobleDeck,
      boardTokens: getTokenData(ctx.numPlayers),
      players: buildPlayers(ctx.playOrder),
      isEndTurn: false,
    }
  },

  moves: {
    drawTokens(G, ctx, changeTokenCount) {
      const validTokenCount = Object.entries(changeTokenCount).filter(last)

      validTokenCount.forEach(([color, count]) => {
        // 토큰 가져오기
        if (count > 0) {
          G.players[ctx.currentPlayer].tokens[color].push(
            ...G.boardTokens[color].splice(0, count)
          )
        }
        // 토큰 반납
        else {
          G.boardTokens[color].push(
            ...G.players[ctx.currentPlayer].tokens[color].splice(0, count)
          )
        }
      })
    },
    buyCard(G, ctx, card) {
      const player = G.players[ctx.currentPlayer]

      const lackCount = countLack(player, card)
      // 토큰이 부족하거나 황금토큰 사용 안할 시 행동 취소
      if (
        (lackCount && player.yellowTokenCount < lackCount) ||
        !confirm("황금토큰을 사용하여 구매하시겠습니까?")
      ) {
        return INVALID_MOVE
      }

      // 토큰 비용 지불
      let yellowTokenCount = player.yellowTokenCount
      for (const color of Object.keys(COLOR)) {
        const realCost = card.costs[color] - player[color + "Donation"]
        const lack = Math.max(realCost - player[color + "TokenCount"], 0)

        // 황금토큰 사용
        if (lack) {
          yellowTokenCount -= lack
          G.boardTokens[color].push(
            ...player.tokens[COLOR.yellow].splice(0, lack)
          )
        }

        const returnTokens = player.tokens[color].splice(0, realCost - lack)
        G.boardTokens[color].push(...returnTokens)
      }

      // 플레이어에게 카드 전달
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const openedCards = G[`openedDevCards${level}`]
      player.boughtCards.push(card)

      // 덱에서 카드 1장 꺼내서 카드교체
      const deck = G[`devDeck${level}`]
      openedCards.splice(openedCards.indexOf(card), 1, ...deck.draw())
    },
    keepCard(G, ctx, card, isDeck = false) {
      const player = G.players[ctx.currentPlayer]

      // 이미 보관한 카드가 3장 이상일 시 행동 취소
      if (player.keptCards.length >= 3) return INVALID_MOVE

      // 노랑 토큰 가져오기
      if (G.boardTokens[COLOR.yellow].length)
        player.tokens.yellow.push(G.boardTokens[COLOR.yellow].pop())

      // 플레이어에게 카드 전달
      player.keptCards.push(card)

      // 덱에서 카드 이동
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const deck = G[`devDeck${level}`]
      if (isDeck) {
        deck.cards.splice(deck.cards.indexOf(card), 1)
      } else {
        const openedCards = G[`openedDevCards${level}`]
        openedCards.splice(openedCards.indexOf(card), 1, ...deck.draw())
      }
    },
  },

  turn: {
    moveLimit: 1,
    onBegin: (G, ctx) => {
      const isFirst = ctx.playOrder[0] === ctx.currentPlayer
      if (!isFirst) return

      const players = ctx.playOrder.map((id) => G.players[id])
      const isGameover = players.some((player) => player.score >= 15)
      if (isGameover) {
        const winner = players.sort((a, b) => b.score - a.score)[0]
        ctx.events.endGame({ winner })
      }
    },
  },
  onEnd: (_, ctx) => {
    alert("승리" + JSON.stringify(ctx.gameover))
  },
}

export default Splendor
