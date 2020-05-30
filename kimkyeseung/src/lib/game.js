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

  setup: () => {
    const developOneDeck = developmentCards.filter(({ grade }) => grade === 1)
    const developTwoDeck = developmentCards.filter(({ grade }) => grade === 2)
    const developThreeDeck = developmentCards.filter(({ grade }) => grade === 3)
    const board = {}
    board.developmentOne = developOneDeck.splice(0, 4)
    board.developmentTwo = developTwoDeck.splice(0, 4)
    board.developmentThree = developThreeDeck.splice(0, 4)
    return {
      developOneDeck,
      developTwoDeck,
      developThreeDeck,
      board,
      hand: [],
    }
  },

  moves: {
    buyDevelopment(G, ctx, id) {
      console.log({ G, ctx, id })
    },
    clickCell(G, ctx, id) {
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer
      }
    }
  },

  turn: { moveLimit: 1 },

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
