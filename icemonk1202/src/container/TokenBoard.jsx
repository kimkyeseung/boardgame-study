import React, { Component } from "react"
import PropTypes from "prop-types"

import Token from "../components/splendor/Token"

import styled from "styled-components"

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
    drawTokens: PropTypes.func,
    tokens: PropTypes.array.isRequired,
  }
  static defaultProps = {
    drawTokens: () => {},
    tokens: () => [],
  }

  state = {
    selectedTokens: {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
    },
  }

  get hasDoubleToken() {
    return (
      this.state.selectedTokens.white > 1 ||
      this.state.selectedTokens.blue > 1 ||
      this.state.selectedTokens.green > 1 ||
      this.state.selectedTokens.red > 1 ||
      this.state.selectedTokens.black > 1
    )
  }

  get totalCount() {
    return (
      this.state.selectedTokens.white +
      this.state.selectedTokens.blue +
      this.state.selectedTokens.green +
      this.state.selectedTokens.red +
      this.state.selectedTokens.black
    )
  }

  get canDrawTokens() {
    return this.hasDoubleToken ? this.totalCount === 2 : this.totalCount === 3
  }

  onDoubleClickToken = (color) => {
    const {
      state: { selectedTokens },
      props: { tokens },
    } = this
    if (tokens.filter((token) => token.color === color).length < 2) return
    if (tokens.filter((token) => token.color === color).length < 4) return

    this.setState({
      selectedTokens: {
        ...selectedTokens,
        [color]: selectedTokens[color] === 2 ? 0 : 2,
      },
    })
  }

  resetTokens() {
    this.setState({
      selectedTokens: {
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
      state: { selectedTokens },
      props: { tokens },
    } = this
    if (selectedTokens[color] === 2) return
    if (!tokens.find((token) => token.color === color)) return

    this.setState({
      selectedTokens: {
        ...selectedTokens,
        [color]: selectedTokens[color] + (selectedTokens[color] ? -1 : 1),
      },
    })
  }

  onChangeToken = (event, color) => {
    const {
      state: { selectedTokens },
      props: { tokens },
    } = this
    if (event.target.value > 2 || event.target.value < 0) return
    if (
      tokens.filter((token) => token.color === color).length < 4 &&
      event.target.value > 1
    )
      return
    if (
      tokens.filter((token) => token.color === color).length <
      event.target.value
    )
      return

    this.setState({
      selectedTokens: {
        ...selectedTokens,
        [color]: +event.target.value,
      },
    })
  }

  render() {
    return (
      <>
        <TokenArea>
          {["white", "blue", "green", "red", "black"].map((color) => (
            <div style={{ display: "flex" }}>
              <Token
                onClick={this.onClickToken}
                onDoubleClick={this.onDoubleClickToken}
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
              this.props.tokens.filter((token) => token.color === "yellow")
                .length
            }
            color="yellow"
          />
        </TokenArea>
        {this.canDrawTokens ? (
          <DrawTokenButton
            onClick={() => {
              this.props.drawTokens(this.state.selectedTokens)
              this.resetTokens()
            }}
          >
            토큰 가져오기
          </DrawTokenButton>
        ) : (
          ""
        )}
      </>
    )
  }
}

export default TokenBoard
