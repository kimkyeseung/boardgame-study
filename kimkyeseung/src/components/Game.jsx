import React from 'react'
import { Client } from 'boardgame.io/react'
import Router from 'next/router'
import { withRouter } from 'next/router'
import Board from '../container/BoardContainer'
import { game } from '../lib'

const Game = ({ router, router: { query } }) => {
  const { players } = query
  if (!players) {
    // router.push('/kimkyeseung')
    return null
  }
  const Splendor = game(players)
  const SplendorGame = Client({
    game: Splendor,
    board: (props) => <Board {...props} />,
    numPlayers: players.length
  })
  return (
    <SplendorGame />
  )
}

export default withRouter(Game)
