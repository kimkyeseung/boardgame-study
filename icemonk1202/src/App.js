import { Client } from "boardgame.io/react"
import { Local } from "boardgame.io/multiplayer"
import { Splendor } from "./lib"
import SplendorBoard from "./container/Board"

const SplendorClient = Client({
  game: Splendor,
  board: SplendorBoard,
  numPlayers: 3,
})

export default SplendorClient
