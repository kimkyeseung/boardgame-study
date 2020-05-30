import { Client } from "boardgame.io/react"
import { Splendor } from "./lib"
import Board from "./container/Board"

const App = Client({
  game: Splendor,
  board: Board,
})

export default App
