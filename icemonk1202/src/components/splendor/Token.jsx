import React, { Component } from "react"
import PropTypes from "prop-types"
import { Token as TokenCover, Gem, GemCount } from "./styled/Token"
import TokenModel from "../../models/Token"

class Token extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    count: PropTypes.number,
    selected: PropTypes.number,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
  }

  static defaultProps = {
    color: "white",
    onClick: () => {},
    onDoubleClick: () => {},
    selected: 0,
    count: 0,
  }

  render() {
    console.log(this.props.selected)
    return (
      <TokenCover
        onClick={(e) => this.props.onClick(this.props.color)}
        onDoubleClick={(e) => this.props.onDoubleClick(this.props.color)}
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
