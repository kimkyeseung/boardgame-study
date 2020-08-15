import { css } from 'styled-components'

const basicBlue = css`
  background: rgb(83,82,237);
  background: radial-gradient(circle, rgba(83,82,237,1) 0%, rgba(55,66,250,1) 100%);
  border-color: #192a56;
`

const basicWhite = css`
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,242,246,1) 100%);
  border-color: #dcdde1;
`

const basicRed = css`
  background: rgb(255,107,129);
  background: radial-gradient(circle, rgba(255,107,129,1) 0%, rgba(255,71,87,1) 100%);
  border-color: #c23616;
`

const basicYellow = css`
  background: rgb(236,204,104);
  background: radial-gradient(circle, rgba(236,204,104,1) 0%, rgba(255,165,2,1) 100%);
  border-color: #e1b12c;
`

const basicBlack = css`
  background: rgb(87,96,111);
  background: radial-gradient(circle, rgba(87,96,111,1) 0%, rgba(47,53,66,1) 100%);
  border-color: #2f3640;
`

const basicGreen = css`
  background: rgb(123,237,159);
  background: radial-gradient(circle, rgba(123,237,159,1) 0%, rgba(46,213,115,1) 100%);
  border-color: #44bd32;
`

const config = {}

config.defaultSetting = {
  maximumPlayerNumber: 4,
  minimumPlayerNumber: 2,
  playerTokenLimit: 10,
  playerReserveDevelopmentLimit: 3,
  playerDefaultToken: {
    "red": 0,
    "blue": 0,
    "green": 0,
    "white": 0,
    "black": 0,
    "yellow": 0
  },
  "player.defaultDevelopments": [],
  "field.tokenStoreDefaultToken": {
    "red": 0,
    "blue": 0,
    "green": 0,
    "white": 0,
    "black": 0,
    "yellow": 0
  }
}

config.theme = {
  basic: {
    white: basicWhite,
    blue: basicBlue,
    red: basicRed,
    green: basicGreen,
    black: basicBlack,
    yellow: basicYellow
  }
}

export default config
