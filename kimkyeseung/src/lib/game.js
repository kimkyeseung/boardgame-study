import developmentCards from '../../assets/developmentCards.json'

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const isRowComplete = row => {
    return false
  }

  return positions.map(isRowComplete).some(i => i === true)
}

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

    const fields = {}
    const defaultValues = { white: 0, red: 0, blue: 0, green: 0, black: 0 }
    Array(numPlayers).fill(1).forEach((a, i) => {
      fields[`player${i}`] = {
        developments: { ...defaultValues },
        token: { ...defaultValues },
        victoryPoints: 0
      }
    })
    return {
      developOneDeck,
      developTwoDeck,
      developThreeDeck,
      board,
      fields
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
      console.log({ctx})
      console.log(development)
      const { value, valueAmount, victoryPoint } = development

      const { developments, victoryPoints } = G.fields[`player${ctx.currentPlayer}`]
      developments[value]++
      G.fields[`player${ctx.currentPlayer}`].victoryPoints = victoryPoints + victoryPoint
      ctx.events.endTurn()
    },
    getToken(G, ctx, token) {
      // if () {

      // }
      ctx.events.endTurn()
    },

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

export default Splendor
