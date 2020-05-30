import styled from "styled-components"
import { COLOR_CODE } from "../../../lib/splendor/constant"

const token = {
  radius: 40,
  borderSize: 2,
}
const Token = styled("div")`
  display: inline-block;
  width: ${token.radius * 2}px;
  height: ${token.radius * 2}px;
  border: ${token.borderSize}px solid ${(props) => COLOR_CODE[props.color]};
  border-radius: ${token.radius}px;
  box-shadow: 2px 2px 4px grey;
`

const gem = {
  width: 40,
  height: 40,
}
const Gem = styled("div")`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${gem.width}px;
  height: ${gem.height}px;
  background: ${(props) => COLOR_CODE[props.color]};
  border-radius: 4px;
`

export { Token, Gem }
