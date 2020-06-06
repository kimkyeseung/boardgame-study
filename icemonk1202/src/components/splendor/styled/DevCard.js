import styled from "styled-components"
import { COLOR_CODE } from "../../../lib/splendor/constant"

const card = {
  width: 120,
  height: 180,
}
const Card = styled("span")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${card.width}px;
  height: ${card.height}px;
  border-radius: 4px;
  background: #ddd;
  box-shadow: 1px 1px 6px 2px grey;
  overflow: hidden;
  user-select: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 1px 1px 12px 4px grey;
  }
`

const Header = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  background: #fff5;
`

const score = {
  width: 32,
  height: 32,
  fontSize: 32,
  margin: 4,
}
const Score = styled("span")`
  width: ${score.width}px;
  height: ${score.height}px;
  font-size: ${score.fontSize}px;
  color: white;
  text-shadow: 0px 0px 4px black;
`

const donation = {
  width: 32,
  height: 32,
  margin: 4,
}
const Donnation = styled("div")`
  width: ${donation.width}px;
  height: ${donation.height}px;
  background: ${(props) => COLOR_CODE[props.color]};
  border-radius: 8px;
`

const costCover = {
  width: 32,
  padding: 4,
}
const CostCover = styled("div")`
  position: relative;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  padding: ${costCover.padding}px;
`
const cost = {
  width: 24,
  height: 24,
  margin: 4,
}
const Cost = styled("div")`
  display: inline-block;
  width: ${cost.width}px;
  height: ${cost.height}px;
  margin-top: ${cost.margin}px;
  background: ${(props) => COLOR_CODE[props.color]};
  border-radius: ${cost.height / 2}px;
  text-align: center;
  line-height: ${cost.height + 2}px;
  color: white;
  text-shadow: 0px 0px 4px black;
  box-shadow: 0px 0px 4px white;
`
export { Card, Header, Score, Donnation, CostCover, Cost }
