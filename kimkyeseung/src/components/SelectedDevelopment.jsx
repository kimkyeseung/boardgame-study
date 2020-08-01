import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Card from './Card'
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
  max-width: 800px;
  ${({ isOpen }) => isOpen && visibleStyle}
`

const visibleStyle = css`
  display: block;
`

Controller.Wrapper = styled.div`
`

const Message = styled.div`

`

const SelectedDevelopment = ({ message, onClose, development, deselectDevelopment, confirmSelectedToken, confirmable }) => {
  console.log('work')
  return (
    <Controller isOpen={development ? true : false}>
      <Message>{message}</Message>
      <Flex>
        <TokkenWrapper>
          <Card dev={development} onClick={() => {
            deselectDevelopment()
          }} />
        </TokkenWrapper>
        <button disabled={!confirmable} onClick={ev => {
          ev.preventDefault()
          confirmSelectedToken()
        }}>confirm</button>
        <button onClick={onClose}>close</button>
      </Flex>
    </Controller>
  )
}

export default SelectedDevelopment
