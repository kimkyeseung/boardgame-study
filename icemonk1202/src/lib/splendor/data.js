import Card from "../../models/Card"
import { baseCardData, baseTokenData } from "./config"

export const getCardData = (_) => baseCardData.map((data) => new Card(data))

let tokenId = 0
export const getTokenData = (player = 2) => {
  const entries = Object.entries(baseTokenData[player])
  return entries.reduce()
}
