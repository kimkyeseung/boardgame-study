import developmentCards from '../../assets/developmentCards.json'
import {
  getTokenValidator,
  tokenLimitValidator,
  buyDevelopmentValidator
} from './validator'
import { getToken, payToken } from '../lib/utils'

const game = (playerNames) => {
  const Splendor = {
    name: "splendor",

    setup: ({ numPlayers, random, ...G }) => {
      // console.log(G)
      const developOneDeck = random.Shuffle(developmentCards.filter(({ grade }) => grade === 1))
      const developTwoDeck = random.Shuffle(developmentCards.filter(({ grade }) => grade === 2))
      const developThreeDeck = random.Shuffle(developmentCards.filter(({ grade }) => grade === 3))
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
      const tokens = {}
      tokens.red
        = tokens.blue
        = tokens.black
        = tokens.white
        = tokens.green
        = tokenCount
      tokens.yellow = 5

      const fields = {}
      const defaultValues = { white: 0, red: 0, blue: 0, green: 0, black: 0, yellow: 0 }
      Array(numPlayers).fill(1).forEach((a, i) => {
        fields[`player${i}`] = {
          name: playerNames[i],
          developments: { ...defaultValues },
          token: { ...defaultValues },
          reservedDevs: [],
          hand: [],
          victoryPoints: 0
        }
      })
      return {
        fields,
        board,
        tokens,
        developOneDeck,
        developTwoDeck,
        developThreeDeck,
      }
    },

    moves: {
      buyDevelopment(G, ctx, development, index, grade) {
        const {
          fields,
          developOneDeck,
          developTwoDeck,
          developThreeDeck,
          board,
          tokens
        } = G
        const { value, valueAmount, victoryPoint, cost } = development
        const { developments, victoryPoints, token } = fields[`player${ctx.currentPlayer}`]
        const able = buyDevelopmentValidator({ developments, token }, cost)
        
        if (able) {
          const diff = Object.keys(token).reduce((diff, color) => {
            const price = cost[color] || 0
            const discountedCost = Math.max(price - developments[color], 0)
            console.log({ color, discountedCost, 'have': developments[color], price })
            if (discountedCost > token[color]) {
              diff += (discountedCost - token[color])
            }
            token[color] -= discountedCost
            tokens[color] += discountedCost
            return diff
          }, 0)
          token.yellow -= diff
          tokens.yellow += diff

          developments[value] += valueAmount
          fields[`player${ctx.currentPlayer}`].victoryPoints = victoryPoints + victoryPoint

          const deck = {
            '1': developOneDeck,
            '2': developTwoDeck,
            '3': developThreeDeck
          }
          board[`dev${grade}${index}`] = deck[grade].pop()

          ctx.events.endTurn()
        } else {
          alert('비용이 모자랍니다.')
        }

      },

      selectToken(G, ctx, token, cb = () => { }) {
        const { tokens, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        if (tokens[token]) {
          G.tokens[token]--
          hand.push(token)
        }
        const result = getTokenValidator(hand)
        cb(result)
      },

      deselectToken(G, ctx, index, cb = () => { }) {
        const { tokens, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        const [token] = hand.splice(index, 1)
        tokens[token]++
        const result = getTokenValidator(hand)
        cb(result)
      },

      cancelSelectedToken(G, ctx, cb = () => { }) {
        const { tokens, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        hand.forEach(token => {
          tokens[token]++
        })
        hand.length = 0
        cb()
      },

      getTokens(G, ctx, cb) {
        const { tokens, fields } = G
        const { hand, token } = fields[`player${ctx.currentPlayer}`]
        hand.forEach(t => {
          token[t]++
        })
        hand.length = 0
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
