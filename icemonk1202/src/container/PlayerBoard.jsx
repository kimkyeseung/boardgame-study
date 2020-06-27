import React, { Component } from "react"
import PropTypes from "prop-types"
import { COLOR_CODE } from "../lib/constant"

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
  border-radius: 8px;
`

const Score = styled.div``

const DonneToken = styled.div`
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

class PlayerBoard extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
  }

  static defaultProps = {
    G: () => {},
    ctx: () => {},
  }

  get currentPlayer() {
    return this.props.G.players?.[this.props.ctx.currentPlayer]
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.currentPlayer)
    }, 1000)
  }

  render() {
    return (
      <Dashboard>
        {["white", "blue", "green", "red", "black", "yellow"].map((color) => {
          const donation = this.currentPlayer[`${color}Donation`]
          const token = this.currentPlayer[`${color}Token`]

          return donation || token ? (
            <DonneToken color={color}>
              <div className="donation">{donation ? donation : ""}</div>
              <div className="token">{token ? token : ""}</div>
              {token && donation ? donation + token : ""}
            </DonneToken>
          ) : (
            <DonneToken color={color}>
              <div className="donation"></div>
              <div className="token"></div>
            </DonneToken>
          )
        })}
      </Dashboard>
    )
  }
}

export default PlayerBoard
