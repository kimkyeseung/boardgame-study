import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Token from './Token'
import { Flex } from './units'

const TokenWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
`

const Controller = styled.div`
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
  display: block;
  position: relative;
  max-width: 800px;
`

Controller.Wrapper = styled.div`
`

const Message = styled.div`

`

const TokenController = ({ message, onClose, tokens = [], deselectToken, confirmSelectedToken, confirmable }) => {
  return (
    <Controller>
      <Message>{message}</Message>
      <Flex>
        <TokenWrapper>
          <Flex>
            {Array.isArray(tokens)
              ? tokens.map((token, i) => (
                <Token
                  onClick={() => {
                    deselectToken(i)
                  }}
                  color={token}
                  key={i} />))
              : Object.keys(tokens).map((token, i) => {
                return <Token onClick={() => { }} color={token} count={tokens[token]} />
              })}
          </Flex>
        </TokenWrapper>
        <button disabled={!confirmable} onClick={ev => {
          ev.preventDefault()
          confirmSelectedToken()
        }}>confirm</button>
        <button onClick={onClose}>close</button>
      </Flex>
    </Controller>
  )
}

export default TokenController
