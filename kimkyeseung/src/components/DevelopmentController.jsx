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

const DevelopmentController = ({
  message,
  development,
  deselectDevelopment,
  buySelectedDevelopment,
  reserveSelectedDevelopment
}) => {

  return (
    <Controller isOpen={development ? true : false}>
      <Message>{message}</Message>
      <Flex>
        <TokkenWrapper>
          <Card dev={development} onClick={() => {
            deselectDevelopment()
          }} />
        </TokkenWrapper>
        <button onClick={ev => {
          ev.preventDefault()
          buySelectedDevelopment()
        }}>구매</button>
        <button onClick={ev => {
          ev.preventDefault()
          reserveSelectedDevelopment()
        }}>예약</button>
        <button onClick={() => {
          deselectDevelopment()
        }}>취소</button>
      </Flex>
    </Controller>
  )
}

export default DevelopmentController
