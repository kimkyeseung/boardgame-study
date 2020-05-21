import { Client } from 'boardgame.io/react'
import { TicTacToe } from './lib'
import Board from './components/Board'

const App = Client({
  game: TicTacToe,
  board: Board
})

export default App
