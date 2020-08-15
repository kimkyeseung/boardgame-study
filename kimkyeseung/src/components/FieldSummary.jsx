import React from 'react'
import styled, { css } from 'styled-components'
import config from '../../config'

const { theme } = config

const StyledFieldSummary = styled.div`
  padding: 0.4rem;
  border: 2px solid transparent;
  border-radius: 12px;
  position: relative;
  ${({ active }) => active && activeCSs};
`

const activeCSs = css`
  border: 2px solid red;
`

const StyledDevelopment = styled.div`
  border: 1px solid gray;
  height: 40px; width: 24px;
  border-radius: 4px;
  margin: 0 0.2rem;
  color: white;
  font-size: 1.8em;
  text-align: center;
  line-height: 40px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  ${({ value }) => theme.basic[value]};
`

const StyledToken = styled.div`
  border: 1px solid gray;
  height: 24px; width: 24px;
  box-sizing: border-box;
  border-radius: 100%;
  color: white;
  text-align: center;
  line-height: 24px;
  margin: 0 0.26rem;
  font-size: 1.4em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  ${({ value }) => theme.basic[value]};
`

const Development = ({ value, amount }) => (
  <StyledDevelopment value={value}>{amount}</StyledDevelopment>
)

Development.Wrapper = styled.div`
  display: flex;
`

const Token = ({ value, amount }) => (
  <StyledToken value={value}>{amount}</StyledToken>
)

Token.Wrapper = styled.div`
  display: flex;
`

const VictoryPoint = styled.div`
  height: 40px; width: 40px;
  box-sizing: border-box;
  border-radius: 100%;
  text-align: center;
  line-height: 40px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  background-color: darkorange;
  border: 4px solid green;
  font-size: 2em;
  position: absolute;
  right: 5px;
  top: 5px;
`

const TokenCount = styled.div``

const FieldSummary = ({ active, field }) => {
  const { developments, tokenAssets, victoryPoints } = field
  const totalTokenCount = Object.values(tokenAssets).reduce((total, count) => total + count, 0)

  return (
    <StyledFieldSummary active={active}>
      <Development.Wrapper>
        <Development value="white" amount={developments.white} />
        <Development value="blue" amount={developments.blue} />
        <Development value="red" amount={developments.red} />
        <Development value="green" amount={developments.green} />
        <Development value="black" amount={developments.black} />
      </Development.Wrapper>
      {victoryPoints ? <VictoryPoint>{victoryPoints}</VictoryPoint> : null}
      <Token.Wrapper>
        <Token value="white" amount={tokenAssets.white} />
        <Token value="blue" amount={tokenAssets.blue} />
        <Token value="red" amount={tokenAssets.red} />
        <Token value="green" amount={tokenAssets.green} />
        <Token value="black" amount={tokenAssets.black} />
        {tokenAssets.yellow ? <Token value="yellow" amount={tokenAssets.yellow} /> : null}
        {totalTokenCount ? <TokenCount>{totalTokenCount}</TokenCount> : null}
      </Token.Wrapper>
    </StyledFieldSummary>
  )
}

export default FieldSummary
