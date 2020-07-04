import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Empty from '../components/units/Empty'

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 200px;
`

const Select = styled.div`
  text-align: center;
  max-width: 240px;
  margin: 0 auto;
`

const Message = styled.div`

`

const activeCss = css`
  background: blue;
`

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
  ${({ isActive }) => isActive && activeCss}
`

Button.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 120px;
  margin: 0 auto;
`

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  & > label {
    width: 120px;
  }
`

Input.Wrapper = styled.div`
`

const StartButton = styled.button`

`

class Lobby extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { playerNum, playerNames, setPlayerName, startGame } = this.props
    console.log({ playerNames })
    return (
      <div>
        <Empty height={200} />
        <Title>Splendor</Title>
        <Empty height={100} />
        <Select>
          <Message>게임에 참여할 인원을 선택해주세요</Message>
          <Empty height={20} />
          <Button.Wrapper>
            {[2, 3, 4].map(num => (
              <Button
                key={num}
                isActive={playerNum === num}
                onClick={ev => {
                  ev.preventDefault()
                  this.props.setPlayerNum(num)
                }}>{num}</Button>
            ))}
          </Button.Wrapper>
        </Select>

        <Empty height={30} />
        <Select>
          <Message>플레이어의 이름을 입력해주세요</Message>
          <Empty height={20} />
          <Input.Wrapper>
            {Array(playerNum).fill().map((num, i) => (
              <Input key={i}>
                <label>
                  플레이어 <span>{i + 1}</span>
                </label>
                <input value={playerNames[i]} onChange={ev => {
                  setPlayerName(ev.target.value, i)
                }} />
              </Input>
            ))}
          </Input.Wrapper>
        </Select>

        <Empty height={30} />
        <Select>
          <StartButton onClick={ev => {
            ev.preventDefault()
            startGame()
          }}>시작하기</StartButton>
        </Select>
      </div>
    )
  }
}

Lobby.propTypes = {
  playerNum: PropTypes.number
}

export default Lobby
