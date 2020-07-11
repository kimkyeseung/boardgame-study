import React from 'react'
import Game from './src/components/Game'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Galada&family=Lobster&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Galada', 'Lobster', 'serif';
  }
  font-family: 'Galada','Lobster', 'serif';
`

const Main = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  position: fixed;
  height: 100%;
  width: 100%;
  margin: 0;
`

export default function Kimkyeseung() {
  return (
    <>
    <GlobalStyle />
    <Main>
      <Game />
    </Main>
    </>
  )
}
