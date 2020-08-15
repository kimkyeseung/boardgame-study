import React, { Component } from "react"
import PropTypes from "prop-types"

import Token from "../components/Token"
import ReturnTokenModal from "./ReturnTokenModal"

import { getId, entries } from "../lib/util"

import styled from "styled-components"
import { COLOR } from "../lib/constant"
import { MAX_TOKEN_COUNT } from "../lib/config"
import { values, sum } from "../lib/util"

const TokenArea = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
`

const TokenInput = styled.input`
  width: 40px;
  height: 20px;
  font-size: 20px;
  outline: none;
`

const DrawTokenButton = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  box-shadow: 2px 2px 4px grey;
  text-align: center;
  vertical-align: middle;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;

  &:active {
    background: #eee;
  }
`

class TokenBoard extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    G: PropTypes.any,
    ctx: PropTypes.any,
    moves: PropTypes.any,
  }

  state = {
    returnTokenModalShow: false,
    changeTokenCount: {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
    },
  }

  get hasDoubleToken() {
    return (
      this.state.changeTokenCount.white > 1 ||
      this.state.changeTokenCount.blue > 1 ||
      this.state.changeTokenCount.green > 1 ||
      this.state.changeTokenCount.red > 1 ||
      this.state.changeTokenCount.black > 1
    )
  }

  get selectedTotalCount() {
    return sum(values(this.state.changeTokenCount))
  }

  get canDrawTokens() {
    return this.hasDoubleToken
      ? this.selectedTotalCount === 2
      : this.selectedTotalCount === 3
  }

  get returnCount() {
    return Math.max(
      this.props.G.players[this.props.ctx.currentPlayer].totalTokenCount +
        this.selectedTotalCount -
        MAX_TOKEN_COUNT,
      0
    )
  }

  resetTokenCount() {
    this.setState({
      changeTokenCount: {
        white: 0,
        blue: 0,
        green: 0,
        red: 0,
        black: 0,
      },
    })
  }

  onClickToken = (color) => {
    const {
      state: { changeTokenCount },
      props: {
        G: { boardTokens },
      },
    } = this
    const existColorCount = boardTokens[color].length
    if (!existColorCount) return
    if (existColorCount <= changeTokenCount[color]) return

    this.setState({
      changeTokenCount: {
        ...changeTokenCount,
        [color]:
          changeTokenCount[color] === 0
            ? 1
            : changeTokenCount[color] === 1
            ? existColorCount < 4
              ? 0
              : 2
            : 0,
      },
    })
  }

  onChangeToken(event, color) {
    const {
      state: { changeTokenCount },
      props: {
        G: { boardTokens },
      },
    } = this
    const existColorCount = boardTokens[color].length
    const newValue = event.target.value

    if (newValue > 2 || newValue < 0) return
    if (existColorCount < 4 && newValue > 1) return
    if (existColorCount < newValue) return

    this.setState({
      changeTokenCount: { ...changeTokenCount, [color]: +newValue },
    })
  }

  onConfirmReturnToken = async (returnTokenCount) => {
    await this.setState({
      changeTokenCount: {
        white: this.state.changeTokenCount.white - returnTokenCount.white,
        blue: this.state.changeTokenCount.blue - returnTokenCount.blue,
        green: this.state.changeTokenCount.green - returnTokenCount.green,
        red: this.state.changeTokenCount.red - returnTokenCount.red,
        black: this.state.changeTokenCount.black - returnTokenCount.black,
      },
    })

    this.drawTokens()
  }

  drawTokens = () => {
    this.props.moves.drawTokens(this.state.changeTokenCount)
    this.resetTokenCount()
  }

  closeReturnModal = () => {
    this.setState({ returnTokenModalShow: false })
  }

  onTokenConfirm = () => {
    if (this.returnCount) {
      this.setState({
        returnTokenModalShow: true,
      })
      return
    }

    this.drawTokens()
  }

  render() {
    return (
      <>
        <TokenArea>
          {Object.values(COLOR)
            .filter((color) => color !== COLOR.yellow)
            .map((color) => (
              <div key={`token-${getId()}`} style={{ display: "flex" }}>
                <Token
                  onClick={this.onClickToken}
                  selected={this.state.changeTokenCount[color]}
                  count={this.props.G.boardTokens[color].length}
                  color={color}
                />
                <TokenInput
                  value={this.state.changeTokenCount[color]}
                  onChange={(event) => this.onChangeToken(event, color)}
                  type="number"
                  min="0"
                  max="2"
                ></TokenInput>
              </div>
            ))}
          <Token
            count={this.props.G.boardTokens[COLOR.yellow].length}
            color="yellow"
          />
        </TokenArea>
        {this.canDrawTokens ? (
          <DrawTokenButton onClick={this.onTokenConfirm}>
            토큰 가져오기
          </DrawTokenButton>
        ) : (
          ""
        )}

        {this.state.returnTokenModalShow && (
          <ReturnTokenModal
            player={this.props.G.players[this.props.ctx.currentPlayer]}
            tempTokens={this.state.changeTokenCount}
            count={this.returnCount}
            close={this.closeReturnModal}
            submit={this.onConfirmReturnToken}
          ></ReturnTokenModal>
        )}
      </>
    )
  }
}

export default TokenBoard
