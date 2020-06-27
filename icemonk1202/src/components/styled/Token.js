import styled from "styled-components"
import { COLOR_CODE } from "../../lib/constant"

const token = {
  radius: 40,
  borderSize: 2,
  margin: 8,
}
const Token = styled("div")`
  display: inline-block;
  width: ${token.radius * 2}px;
  height: ${token.radius * 2}px;
  border: ${token.borderSize}px solid ${(props) => COLOR_CODE[props.color]};
  border-radius: ${token.radius}px;
  box-shadow: ${(props) =>
    props.selected ? `0 0 0 8px gold` : `2px 2px 4px grey`};
  user-select: none;
  transition: all 0.3s;
  cursor: pointer;
  margin: ${token.margin}px;

  &:hover {
    filter: brightness(1.05);
    box-shadow: ${(props) =>
      props.selected ? `0 0 0 12px gold` : `2px 2px 8px grey`};
  }
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
  border: 1px solid #ddd;
`

const GemCount = styled.div`
  position: relative;
  left: -20px;
  bottom: -20px;
  font-size: 32px;
  font-weight: bold;
`

export { Token, Gem, GemCount }
