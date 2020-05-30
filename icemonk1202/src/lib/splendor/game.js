import { getCardData } from "./data"
import { LEVEL } from "./constant"

const cards = getCardData()
const devCards = cards.filter((card) => card.level !== LEVEL.NOBLE)
const nobleCards = cards.filter((card) => card.level === LEVEL.NOBLE)
const Splendor = {
  name: "splendor",

  setup: () => ({
    devCards,
    nobleCards,
    // tokens: Array(9).fill(null),
  }),

  // moves: {
  //   clickCell(G, ctx, id) {
  //     if (G.cells[id] === null) {
  //       G.cells[id] = ctx.currentPlayer
  //     }
  //   },
  // },

  // turn: { moveLimit: 1 },

  // endIf: (G, ctx) => {
  //   if (IsVictory(G.cells)) {
  //     return { winner: ctx.currentPlayer }
  //   }
  //   if (G.cells.filter((c) => c === null).length === 0) {
  //     return { draw: true }
  //   }
  // },

  // ai: {
  //   enumerate: (G) => {
  //     let moves = []
  //     for (let i = 0; i < 9; i++) {
  //       if (G.cells[i] === null) {
  //         moves.push({ move: "clickCell", args: [i] })
  //       }
  //     }
  //     return moves
  //   },
  // },
}

export default Splendor
