import developmentCards from '../../assets/developmentCards.json'
import {
  getTokenValidator,
  tokenLimitValidator
} from './validator'

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
      const defaultValues = { white: 0, red: 0, blue: 0, green: 0, black: 0 }
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
      replaceDevelopmentSpace(G, ctx, { index, grade }) {
        const deck = {
          '1': G.developOneDeck,
          '2': G.developTwoDeck,
          '3': G.developThreeDeck
        }
        G.board[`dev${grade}${index}`] = deck[grade].pop()
      },

      buyDevelopment(G, ctx, development) {
        const { value, valueAmount, victoryPoint } = development

        const { developments, victoryPoints } = G.fields[`player${ctx.currentPlayer}`]
        developments[value]++
        G.fields[`player${ctx.currentPlayer}`].victoryPoints = victoryPoints + victoryPoint
        ctx.events.endTurn()
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
