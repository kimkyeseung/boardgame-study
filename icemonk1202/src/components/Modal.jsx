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

const Modal = styled.div`
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

const ActionButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 20px;
`

class ActionModal extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    close: PropTypes.func,
  }

  static defaultProps = {
    width: 400,
    close: () => {},
  }

  render() {
    return (
      <Overay onClick={this.props.close}>
        <Modal width={this.props.width}>{this.props.children}</Modal>
      </Overay>
    )
  }
}

export default ActionModal
