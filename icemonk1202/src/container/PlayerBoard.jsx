import React, { Component } from "react"
import PropTypes from "prop-types"
import { COLOR, COLOR_CODE } from "../lib/constant"
import { getId, entries } from "../lib/util"

import styled from "styled-components"

const Dashboard = styled.div`
  width: 90%;
  height: 10vh;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid grey;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 4px #ddd;
  background: #ddd;
`

const SideDashboard = styled.div`
  width: 200px;
  height: 140px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  top: ${(props) => 80 + props.index * 180}px;
  left: 0;
  border: 1px solid grey;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 4px #ddd;
  background: #ddd;

  .player-info {
    position: absolute;
    top: -20px;
    left: 0;
    width: fit-content;
    height: 20px;
    background: white;
    border: 1px solid grey;
  }
`

const DonationToken = styled.div`
  width: 100px;
  display: flex;

  div {
    border: 1px solid grey;
    border-radius: 2px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    background: ${(props) => COLOR_CODE[props.color]};
    color: white;
    text-shadow: 0 0 4px black;
  }

  .token {
    border-radius: 50%;
  }
`

const CurrentPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 120px;
  height: 60px;
  font-size: 60px;
  text-align: center;
  background: deepskyblue;
  border-radius: 0 0 4px 0;
  color: white;
  z-index: 10;
  user-select: none;
`

const Score = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 160px;
  height: 60px;
  font-size: 60px;
  text-align: center;
  background: darkred;
  border-radius: 0 0 4px 0;
  color: white;
  z-index: 10;
  user-select: none;
`

class PlayerBoard extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    player: PropTypes.any.isRequired,
    players: PropTypes.any.isRequired,
  }

  static defaultProps = {
    player: () => ({}),
    players: () => [],
  }

  get otherPlayers() {
    return entries(this.props.players)
      .filter(([id]) => id !== this.props.player.id)
      .map(([_, player]) => player)
  }

  render() {
    return (
      <>
        <CurrentPlayer>{this.props.player.id}번</CurrentPlayer>
        <Score>{this.props.player.score}점</Score>
        {this.otherPlayers.map((player, index) => {
          return (
            <SideDashboard key={player.id} index={index}>
              <div className="player-info">
                {player.id}번 {player.score}점
              </div>
              {Object.values(COLOR).map((color) => {
                const donation = player[`${color}Donation`]
                const token = player[`${color}TokenCount`]

                return color === COLOR.yellow ? (
                  <DonationToken
                    key={`donation-token-${getId()}`}
                    color={color}
                  >
                    <div className="token">{token ? token : ""}</div>
                  </DonationToken>
                ) : (
                  <DonationToken
                    key={`donation-token-${getId()}`}
                    color={color}
                  >
                    <div className="donation">{donation ? donation : ""}</div>
                    <div className="token">{token ? token : ""}</div>
                  </DonationToken>
                )
              })}
            </SideDashboard>
          )
        })}
        <Dashboard>
          {Object.values(COLOR).map((color) => {
            const donation = this.props.player[`${color}Donation`]
            const token = this.props.player[`${color}TokenCount`]

            return color === COLOR.yellow ? (
              <DonationToken key={`donation-token-${getId()}`} color={color}>
                <div className="token">{token ? token : ""}</div>
              </DonationToken>
            ) : (
              <DonationToken key={`donation-token-${getId()}`} color={color}>
                <div className="donation">{donation ? donation : ""}</div>
                <div className="token">{token ? token : ""}</div>
                {token && donation ? donation + token : ""}
              </DonationToken>
            )
          })}
        </Dashboard>
      </>
    )
  }
}

export default PlayerBoard
