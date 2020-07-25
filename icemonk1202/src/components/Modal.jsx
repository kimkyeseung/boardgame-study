import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Overay = styled.div`
  display: absolute;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #0005;
  z-index: 10;
  opacity: ${(props) => props.state.opacity};
  transition: opacity ${(props) => props.state.delay / 1000}s;
`

const ContentCover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width}px;
  height: fit-content;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 6px grey;
`

class Modal extends Component {
  static propTypes = {
    value: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    close: PropTypes.func,
  }

  static defaultProps = {
    value: false,
    width: 400,
    close: () => {},
  }

  state = {
    opacity: 0,
    delay: 300,
  }

  onClickContent = (e) => {
    e.stopPropagation()
  }

  close = () => {
    this.setState({ opacity: 0 })

    setTimeout(() => this.props.close(), this.state.delay)
  }

  onKeydownEscape = (e) => {
    if (e.key !== "Escape") return

    this.close()
  }

  componentDidUpdate = (prevProps) => {
    if (!prevProps.value)
      setTimeout(() => this.setState({ opacity: 1 }), this.state.delay)
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.onKeydownEscape)
  }
  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.onKeydownEscape)
  }

  render() {
    return (
      this.props.value && (
        <Overay onClick={this.close} state={this.state}>
          <ContentCover width={this.props.width} onClick={this.onClickContent}>
            {this.props.children}
          </ContentCover>
        </Overay>
      )
    )
  }
}

export default Modal
