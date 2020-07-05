import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Token from './Token'
import { Flex } from './units'

const TokkenWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
`

const Controller = styled.div`
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
  display: none;
  position: relative;
  ${({ isOpen }) => isOpen && visibleStyle}
`

const visibleStyle = css`
  display: block;
`

Controller.Wrapper = styled.div`
`

const SelectedTokens = ({ onClose, tokens = [], deselectToken, confirmSelectedToken, confirmable }) => {
  return (
    <Controller isOpen={tokens.length ? true : false}>
      <TokkenWrapper>
        <Flex>
          {tokens.map((token, i) => {
            return <Token onClick={() => {
              deselectToken(i)
            }} color={token} key={i} />
          })}
        </Flex>
      </TokkenWrapper>
      <button disabled={!confirmable} onClick={ev => {
        ev.preventDefault()
        confirmSelectedToken(onClose)
      }}>confirm</button>

      <button onClick={onClose}>close</button>
    </Controller>
  )
}

export default SelectedTokens
