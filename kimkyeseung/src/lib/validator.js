export const getTokenValidator = (tokens = []) => {
  switch (tokens.length) {
    case 2: {
      const [token1, token2] = tokens
      return token1 === token2
    }
    case 3: {
      const [token1, token2, token3] = tokens
      return (token1 !== token2) && (token1 !== token3) && (token2 !== token3)
    }
    default:
      return false
  }
}

export const tokenLimitValidator = (token = {}) => {
  const limit = 10
  const total = Object.values(token).reduce((a, t) => a + t)

  return total <= limit
}

export const buyDevelopmentValidator = (player, cost) => { //todo
  const { developments, token } = player
  const total = {}
  Object.keys(developments).forEach(color => {
    total[color] = developments[color] + token[color]
  })
  const diff = Object.keys(cost).reduce((diffAmount, color) =>
    diffAmount + (cost[color] - total[color]), 0)

  return (token.yellow > diff) || (diff <= 0)
}