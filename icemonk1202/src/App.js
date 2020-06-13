import { Client } from "boardgame.io/react"
import { Local } from "boardgame.io/multiplayer"
import { Splendor } from "./lib"
import SplendorBoard from "./container/Board"

const SplendorClient = Client({
  game: Splendor,
  board: SplendorBoard,
  numPlayers: 4,
})

export default SplendorClient
