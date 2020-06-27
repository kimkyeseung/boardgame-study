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
  width: 400px;
  height: fit-content;
  background: white;
  border-radius: 4px;
  border: 1px solid grey;
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

  onKeypressESC = (e) => {
    if (e.key !== "Escape") return

    this.props.close()
  }
  componentWillMount = () => {
    window.addEventListener("keydown", this.onKeypressESC)
  }
  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.onKeypressESC)
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
