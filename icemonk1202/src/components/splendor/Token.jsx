import React, { Component } from "react"
import PropTypes from "prop-types"
import { Token as TokenCover, Gem } from "./styled/Token"
import TokenModel from "../../models/Token"

class Token extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TokenCover color={this.props.color}>
        <Gem color={this.props.color}></Gem>
      </TokenCover>
    )
  }
}

export default Token
