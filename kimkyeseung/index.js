import React from 'react'
import { Link } from '../lib/utils'
import App from './src/App'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
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
        <Link to="/">HOME</Link>
        <App />
      </Main>
    </>
  )
}
