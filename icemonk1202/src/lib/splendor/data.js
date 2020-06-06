import Card from "../../models/Card"
import Token from "../../models/Token"
import { baseCardData, baseTokenData } from "./config"

export const getCardData = (_) => baseCardData.map((data) => new Card(data))

const generateTokens = (color = "white", count = 0) => {
  const tokens = []
  for (let i = 0; i < count; i++) {
    tokens.push(new Token({ color }))
  }
  return tokens
}

export const getTokenData = (player = 2) =>
  Object.entries(baseTokenData[player]).reduce((acc, [color, count]) => {
    acc.push(...generateTokens(color, count))
    return acc
  }, [])
