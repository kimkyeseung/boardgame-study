import DEVELOPMENT_CARDS from '../../assets/developmentCards.json'
import {
  getTokenValidator,
  tokenLimitValidator,
  buyDevelopmentValidator,
  reserveDevelopmentValidator
} from './validator'
import { getToken, payToken, getLackAmount } from '../lib/utils'

const developCards = Object.keys(DEVELOPMENT_CARDS).reduce((cards, cardId) => {
  const { grade, id } = DEVELOPMENT_CARDS[cardId]
  switch (grade) {
    case 1:
      cards.gradeOne.push(id)
      return cards
    case 2:
      cards.gradeTwo.push(id)
      return cards
    case 3:
      cards.gradeThree.push(id)
      return cards
    default:
      return cards
  }
}, { gradeOne: [], gradeTwo: [], gradeThree: [] })

const game = (playerNames) => {
  const Splendor = {
    name: "splendor",

    setup: ({ numPlayers, random, ...G }) => {
      const developOneDeck = random.Shuffle(developCards.gradeOne)
      const developTwoDeck = random.Shuffle(developCards.gradeTwo)
      const developThreeDeck = random.Shuffle(developCards.gradeThree)
      const board = {}
      board.dev10 = developOneDeck.pop()
      board.dev11 = developOneDeck.pop()
      board.dev12 = developOneDeck.pop()
      board.dev13 = developOneDeck.pop()

      board.dev20 = developTwoDeck.pop()
      board.dev21 = developTwoDeck.pop()
      board.dev22 = developTwoDeck.pop()
      board.dev23 = developTwoDeck.pop()

      board.dev30 = developThreeDeck.pop()
      board.dev31 = developThreeDeck.pop()
      board.dev32 = developThreeDeck.pop()
      board.dev33 = developThreeDeck.pop()

      const tokenCount = numPlayers * 2 - 1 + (numPlayers === 2 ? 1 : 0)
      const tokenStore = {}
      tokenStore.red
        = tokenStore.blue
        = tokenStore.black
        = tokenStore.white
        = tokenStore.green
        = tokenCount
      tokenStore.yellow = 5

      const fields = {}
      const defaultValues = { white: 0, red: 0, blue: 0, green: 0, black: 0, yellow: 0 }
      Array(numPlayers).fill(1).forEach((a, i) => {
        fields[`player${i}`] = {
          name: playerNames[i],
          developments: { ...defaultValues },
          token: { ...defaultValues },
          reservedDevs: [],
          hand: {
            tokens: [],
            development: null
          },
          victoryPoints: 0
        }
      })
      return {
        fields,
        board,
        tokenStore,
        developOneDeck,
        developTwoDeck,
        developThreeDeck,
      }
    },

    moves: {
      selectDevelopment(G, ctx, devId, current, next, cb = () => { }) {
        const { fields, board } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        if (hand.development) {
          const { index, grade, development } = current
          board[`dev${grade}${index}`] = development
        }
        hand.development = devId
        const { grade, index } = next
        board[`dev${grade}${index}`] = null

        cb(hand.development)
      },

      deselectDevelopment(G, ctx, current, cb = () => { }) {
        const { fields, board } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]

        if (!hand.development) {
          return
        }

        const { grade, index } = current

        board[`dev${grade}${index}`] = hand.development
        hand.development = null

        cb()
      },

      buyDevelopment(G, ctx, current, cb = () => { }) {
        const {
          fields,
          developOneDeck,
          developTwoDeck,
          developThreeDeck,
          board,
          tokenStore
        } = G
        const { developments, victoryPoints, token, hand } = fields[`player${ctx.currentPlayer}`]

        const targetDevelopment = DEVELOPMENT_CARDS[hand.development]
        const { value, valueAmount, victoryPoint, cost } = targetDevelopment

        const lackAmount = getLackAmount({ developments, token }, cost)
        const buyable = token.yellow >= lackAmount

        if (buyable) {
          const lack = Object.keys(token).reduce((diff, color) => {
            const individualCost = cost[color] || 0
            const discountedIndividualCost = individualCost > developments[color] ? individualCost - developments[color] : 0
            if (discountedIndividualCost > token[color]) {
              const toPay = discountedIndividualCost - token[color]
              diff += toPay
              token[color] -= toPay
              tokenStore[color] += toPay
            } else {
              token[color] -= discountedIndividualCost
              tokenStore[color] += discountedIndividualCost
            }

            return diff
          }, 0)
          token.yellow -= lack
          tokenStore.yellow += lack

          developments[value] += valueAmount
          fields[`player${ctx.currentPlayer}`].victoryPoints = victoryPoints + victoryPoint

          const deck = {
            '1': developOneDeck,
            '2': developTwoDeck,
            '3': developThreeDeck
          }
          const { grade, index } = current
          board[`dev${grade}${index}`] = deck[grade].pop()
          hand.development = null

          cb()
          ctx.events.endTurn()
        } else {
          alert('비용이 모자랍니다.')
        }
      },

      reserveDevelopment(G, ctx, current, cb = () => { }) {
        const {
          fields,
          developOneDeck,
          developTwoDeck,
          developThreeDeck,
          board,
          tokenStore
        } = G
        const { reservedDevs, token, hand } = fields[`player${ctx.currentPlayer}`]

        const targetDevelopment = DEVELOPMENT_CARDS[hand.development]

        const able = reserveDevelopmentValidator(reservedDevs)
        if (able) {
          if (tokenStore.yellow) {
            tokenStore.yellow--
            token.yellow++
          }
          reservedDevs.push(targetDevelopment.id)

          const deck = {
            '1': developOneDeck,
            '2': developTwoDeck,
            '3': developThreeDeck
          }
          const { grade, index } = current
          board[`dev${grade}${index}`] = deck[grade].pop()
          hand.development = null

          cb()
          ctx.events.endTurn()
        } else {
          alert('더 이상 예약할 수 없습니다.')
        }
      },

      selectToken(G, ctx, token, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        if (tokenStore[token]) {
          tokenStore[token]--
          hand.tokens.push(token)
        }
        const result = getTokenValidator(hand.tokens, tokenStore)
        cb(result)
      },

      deselectToken(G, ctx, index, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        const [token] = hand.tokens.splice(index, 1)
        tokenStore[token]++
        const result = getTokenValidator(hand.tokens)
        cb(result)
      },

      cancelSelectedToken(G, ctx, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        hand.tokens.forEach(token => {
          tokenStore[token]++
        })
        hand.tokens.length = 0
        cb()
      },

      getTokens(G, ctx, cb) {
        const { fields } = G
        const { hand, token } = fields[`player${ctx.currentPlayer}`]
        hand.tokens.forEach(t => {
          token[t]++
        })
        hand.tokens = []
        if (tokenLimitValidator(token)) {
          cb()
          ctx.events.endTurn()
        } else {
        }
      },

      returnTokens(over) {

      }

    },

    turn: {
      // endIf: (G, ctx) => ({ next: '3' }),
    },

    endIf: (G, ctx) => {
      return false
      // if (IsVictory(G.cells)) {
      //   return { winner: ctx.currentPlayer }
      // }
      // if (G.cells.filter(c => c === null).length === 0) {
      //   return { draw: true }
      // }
    },

    ai: {
      enumerate: G => {
        let moves = [];
        for (let i = 0; i < 9; i++) {
          if (G.cells[i] === null) {
            moves.push({ move: "clickCell", args: [i] })
          }
        }
        return moves
      }
    }
  }
  return Splendor
}

export default game
