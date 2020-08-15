import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Token from './Token'
import Noble from './Noble'
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

const NobleController = ({ message, nobles = [], onNobleClick }) => {
  return (
    <Controller>
      <Message>{message}</Message>
      <Flex>
        <TokenWrapper>
          <Flex>
            {nobles.map(noble => (
              <Noble key={noble} noble={noble} handler={onNobleClick} />
            ))}
          </Flex>
        </TokenWrapper>
      </Flex>
    </Controller>
  )
}

export default NobleController
