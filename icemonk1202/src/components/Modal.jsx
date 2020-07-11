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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    close: PropTypes.func,
  }

  static defaultProps = {
    width: 400,
    close: () => {},
  }

  onClickContent = (e) => {
    e.stopPropagation()
  }

  onKeydownEscape = (e) => {
    if (e.key !== "Escape") return

    this.props.close()
  }
  componentDidMount = () => {
    window.addEventListener("keydown", this.onKeydownEscape)
  }
  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.onKeydownEscape)
  }

  render() {
    return (
      <Overay onClick={this.props.close}>
        <ContentCover width={this.props.width} onClick={this.onClickContent}>
          {this.props.children}
        </ContentCover>
      </Overay>
    )
  }
}

export default Modal
