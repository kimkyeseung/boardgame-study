import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import card from '../model/card'

//한칸에 대한 스타일 정의.
const Cell = styled.div`
text-align: center;
font-weight: bold;
font-size: 25px;
color: #555;
width: 50px;
height: 50px;
line-height: 50px;
border: 3px solid #aaa;
background: #fff;
&.active {
  cursor: pointer;
  background: #eeffe9;
  &:hover {
    background: #eeffff;
  }
}
`

//token

//1,2 player deck set
let player1card = [];
let player2card = [];

class Splender extends Component {
  
  onClick = id => {
    //
    if (this.isActive(id)) {
      this.props.moves.clickCell(id)
    }
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    
    //main board set


    //token
    

    //2 player deck set

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        <Cell
            key={id}
            className={this.isActive(id) ? 'active' : ''}
            onClick={() => this.onClick(id)}
          >
            {this.props.G.cells[id]}
          </Cell>
      }
    }


    return (
      <>
        <div>스플랜더</div>
      </>
    )
  }
}

export default Splender