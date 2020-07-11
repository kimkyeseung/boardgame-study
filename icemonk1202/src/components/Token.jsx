import React, { Component } from "react"
import PropTypes from "prop-types"
import { Token as TokenCover, Gem, GemCount } from "./styled/Token"
import TokenModel from "../models/Token"

class Token extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    count: PropTypes.number,
    selected: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    color: "white",
    onClick: () => {},
    selected: 0,
    count: 0,
  }

  render() {
    return (
      <TokenCover
        onClick={() => this.props.onClick(this.props.color)}
        color={this.props.color}
        selected={this.props.selected}
      >
        <Gem color={this.props.color}></Gem>
        <GemCount>{this.props.count}</GemCount>
      </TokenCover>
    )
  }
}

export default Token
