import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Board from '../components/Board'

class BoardContainer extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      confirmable: false,
      focusedDevelopment: {},
      tokenOverloaded: 0
    }
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.deselectDevelopment = this.deselectDevelopment.bind(this)
    this.buySelectedDevelopment = this.buySelectedDevelopment.bind(this)
    this.reserveSelectedDevelopment = this.reserveSelectedDevelopment.bind(this)
    this.handleTokenClick = this.handleTokenClick.bind(this)
    this.confirmSelectedToken = this.confirmSelectedToken.bind(this)
    this.cancelSelectedToken = this.cancelSelectedToken.bind(this)
    this.deselectToken = this.deselectToken.bind(this)
    this.returnToken = this.returnToken.bind(this)
    this.handleNobleClick = this.handleNobleClick.bind(this)
  }

  componentDidUpdate({ G }) {
    console.log(G)
  }

  handleSpaceClick(dev, index, grade) {
    const { moves } = this.props
    const { selectDevelopment } = moves

    const { focusedDevelopment: current } = this.state
    const next = { index, grade }

    selectDevelopment(dev, current, next, (development) => {
      this.setState({
        focusedDevelopment: {
          grade,
          index,
          development
        }
      })
    })
  }

  deselectDevelopment() {
    const { moves } = this.props
    const { deselectDevelopment } = moves
    const { focusedDevelopment } = this.state

    deselectDevelopment(focusedDevelopment, () => {
      this.setState({ focusedDevelopment: {} })
    })
  }

  buySelectedDevelopment() {
    const { moves } = this.props
    const { buyDevelopment } = moves
    const { focusedDevelopment } = this.state

    buyDevelopment(focusedDevelopment, () => {
      this.setState({ focusedDevelopment: {} })
    })
  }

  reserveSelectedDevelopment() {
    const { moves } = this.props
    const { reserveDevelopment } = moves
    const { focusedDevelopment } = this.state

    reserveDevelopment(focusedDevelopment, (tokenOverloaded = 0) => {
      this.setState({
        focusedDevelopment: {},
        tokenOverloaded
      })
    })
  }

  handleTokenClick(token) {
    if (token === 'yellow') {
      return
    }
    const { G, ctx, moves } = this.props
    const { selectToken } = moves
    selectToken(token, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  deselectToken(index) {
    const { G, ctx, moves } = this.props
    const { deselectToken } = moves
    deselectToken(index, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  confirmSelectedToken() {
    const { G, ctx, moves } = this.props
    const { selectToken, getTokens } = moves
    getTokens((tokenOverloaded = 0) => {
      this.setState({
        confirmable: false,
        tokenOverloaded
      })
    })
  }

  cancelSelectedToken() {
    const { G, ctx, moves } = this.props
    const { cancelSelectedToken } = moves
    cancelSelectedToken(() => {
      this.setState({
        confirmable: false
      })
    })
  }

  returnToken(token) {
    const { G, ctx, moves } = this.props
    const { returnTokens } = moves
    returnTokens(token, () => {
      this.setState({
        tokenOverloaded: 0
      })
    })
  }

  handleNobleClick(noble) {
    const { G, ctx, moves } = this.props
    const { selectGetNoble } = moves
    selectGetNoble(noble)
  }

  render() {
    const { G, ctx } = this.props

    return (
      <Board
        G={G}
        ctx={ctx}
        handleSpaceClick={this.handleSpaceClick}
        deselectDevelopment={this.deselectDevelopment}
        buySelectedDevelopment={this.buySelectedDevelopment}
        reserveSelectedDevelopment={this.reserveSelectedDevelopment}
        handleTokenClick={this.handleTokenClick}
        confirmSelectedToken={this.confirmSelectedToken}
        cancelSelectedToken={this.cancelSelectedToken}
        deselectToken={this.deselectToken}
        returnToken={this.returnToken}
        handleNobleClick={this.handleNobleClick}
        {...this.state}
      />
    )
  }
}

export default BoardContainer
