export const getTokenValidator = (tokens = []) => {
  switch (tokens.length) {
    case 2: {
      const [token1, token2] = tokens
      return token1 === token2
    }
    case 3: {
      const [token1, token2, token3] = tokens
      return token1 !== token2 !== token3
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