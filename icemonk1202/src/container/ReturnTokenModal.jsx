import React, { Component } from "react"
import PropTypes from "prop-types"

import Token from "../components/Token"
import Modal from "../components/Modal"

import { getId } from "../lib/util"

import styled from "styled-components"
import { COLOR } from "../lib/constant"
import { values, sum } from "../lib/util"

const TokenArea = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 32px;
`

const TokenInput = styled.input`
  width: 40px;
  height: 20px;
  font-size: 20px;
  outline: none;
`

const SubmitButton = styled.div`
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

class ReturnTokenModal extends Component {
  constructor(props) {
    super(props)

    this.setState({
      existTokens: {
        white: this.props.player.whiteTokenCount,
        blue: this.props.player.blueTokenCount,
        green: this.props.player.greenTokenCount,
        red: this.props.player.redTokenCount,
        black: this.props.player.blackTokenCount,
      },
    })
  }
  componentWillMount = () => {
    this.setState({
      existTokens: {
        white: this.props.player.whiteTokenCount,
        blue: this.props.player.blueTokenCount,
        green: this.props.player.greenTokenCount,
        red: this.props.player.redTokenCount,
        black: this.props.player.blackTokenCount,
      },
    })
    console.log(this.state.existTokens)
    console.log(this.state.selectedTokens)
  }

  static propTypes = {
    player: PropTypes.object.isRequired,
    tempTokens: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    close: PropTypes.func,
    submit: PropTypes.func,
  }
  static defaultProps = {
    player: () => ({
      tokens: { white: 0, blue: 0, green: 0, red: 0 },
    }),
    tempTokens: () => ({
      tokens: { white: 0, blue: 0, green: 0, red: 0 },
    }),
    count: 1,
    close: () => {},
    submit: () => {},
  }

  state = {
    existTokens: {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
    },
    selectedTokens: {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
    },
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
      state: { existTokens, selectedTokens },
      props: { tempTokens },
    } = this

    this.setState({
      selectedTokens: {
        ...selectedTokens,
        [color]:
          selectedTokens[color] < existTokens[color] + tempTokens[color]
            ? selectedTokens[color] + 1
            : 0,
      },
    })
  }

  onChangeToken(event, color) {
    const {
      state: { existTokens, selectedTokens },
    } = this
    const existColorCount = existTokens[color]
    const newValue = event.target.value

    if (newValue > 2 || newValue < 0) return
    if (existColorCount < 4 && newValue > 1) return
    if (existColorCount < newValue) return

    this.setState({ selectedTokens: { ...selectedTokens, [color]: +newValue } })
  }

  onTokenConfirm = () => {
    if (this.selectedTotalCount !== this.props.count) return

    this.props.submit(this.state.selectedTokens)
    this.props.close()
    this.resetTokens()
  }

  render() {
    return (
      <Modal width={1000}>
        <div style={{ fontSize: "24px", padding: "32px 32px 0 32px" }}>
          {this.selectedTotalCount}/{this.props.count}
        </div>
        <TokenArea>
          {values(COLOR)
            .filter((color) => color !== COLOR.yellow)
            .map((color) => (
              <div key={`token-${getId()}`} style={{ display: "flex" }}>
                <Token
                  onClick={this.onClickToken}
                  selected={this.state.selectedTokens[color]}
                  count={
                    this.state.existTokens[color] + this.props.tempTokens[color]
                  }
                  color={color}
                />
                <TokenInput
                  value={this.state.selectedTokens[color]}
                  onChange={(event) => this.onChangeToken(event, color)}
                  type="number"
                  min="0"
                  max={
                    this.state.existTokens[color] + this.props.tempTokens[color]
                  }
                ></TokenInput>
              </div>
            ))}
        </TokenArea>
        <SubmitButton onClick={this.onTokenConfirm}>토큰 가져오기</SubmitButton>
      </Modal>
    )
  }
}

export default ReturnTokenModal
