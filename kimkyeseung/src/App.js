import { Client } from 'boardgame.io/react'
import { Splendor } from './lib'
import Board from './components/Board'

const App = Client({
  game: Splendor,
  board: Board,
  numPlayers: 4,
})

export default App
