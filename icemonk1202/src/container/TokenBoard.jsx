import React, { Component } from "react"
import PropTypes from "prop-types"

import Token from "../components/Token"
import ReturnTokenModal from "./ReturnTokenModal"

import { getId } from "../lib/util"

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

const getDefaultState = () => ({
  selectedTokens: {
    white: 0,
    blue: 0,
    green: 0,
    red: 0,
    black: 0,
  },
})
class TokenBoard extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentPlayer: PropTypes.object.isRequired,
    drawTokens: PropTypes.func,
    tokens: PropTypes.array.isRequired,
  }
  static defaultProps = {
    currentPlayer: () => ({}),
    drawTokens: () => {},
    tokens: () => [],
  }

  state = getDefaultState()

  get hasDoubleToken() {
    return (
      this.state.selectedTokens.white > 1 ||
      this.state.selectedTokens.blue > 1 ||
      this.state.selectedTokens.green > 1 ||
      this.state.selectedTokens.red > 1 ||
      this.state.selectedTokens.black > 1
    )
  }

  get selectedTotalCount() {
    return sum(values(this.state.selectedTokens))
  }

  get canDrawTokens() {
    return this.hasDoubleToken
      ? this.selectedTotalCount === 2
      : this.selectedTotalCount === 3
  }

  resetTokens() {
    this.setState(getDefaultState())
  }

  onClickToken = (color) => {
    const {
      state: { selectedTokens },
      props: { tokens },
    } = this
    const existColorCount = tokens.filter((token) => token.color === color)
      .length
    if (!existColorCount) return
    if (existColorCount <= selectedTokens[color]) return

    this.setState({
      selectedTokens: {
        ...selectedTokens,
        [color]:
          selectedTokens[color] === 0
            ? 1
            : selectedTokens[color] === 1
            ? existColorCount < 4
              ? 0
              : 2
            : 0,
      },
    })
  }

  onChangeToken = (event, color) => {
    const {
      state: { selectedTokens },
      props: { tokens },
    } = this
    const existColorCount = tokens.filter((token) => token.color === color)
      .length
    const newValue = event.target.value

    if (newValue > 2 || newValue < 0) return
    if (existColorCount < 4 && newValue > 1) return
    if (existColorCount < newValue) return

    this.setState({ selectedTokens: { ...selectedTokens, [color]: +newValue } })
  }

  onTokenConfirm = () => {
    const newTokenCount =
      this.selectedTotalCount + this.props.currentPlayer.totalTokenCount
    const mustReturnCount = MAX_TOKEN_COUNT - newTokenCount
    if (mustReturnCount > 0) {
    }

    this.props.drawTokens(this.state.selectedTokens)
    this.resetTokens()
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
                  selected={this.state.selectedTokens[color]}
                  count={
                    this.props.tokens.filter((token) => token.color === color)
                      .length
                  }
                  color={color}
                />
                <TokenInput
                  value={this.state.selectedTokens[color]}
                  onChange={(event) => this.onChangeToken(event, color)}
                  type="number"
                  min="0"
                  max="2"
                ></TokenInput>
              </div>
            ))}
          <Token
            count={
              this.props.tokens.filter((token) => token.color === COLOR.yellow)
                .length
            }
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
        <ReturnTokenModal player={this.props.currentPlayer}></ReturnTokenModal>
      </>
    )
  }
}

export default TokenBoard
