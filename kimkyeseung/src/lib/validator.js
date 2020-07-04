export const getTokenValidator = (tokens = []) => {
  switch (tokens.length) {
    case 2:
      [token1, token2] = tokens
      return token1 === token2
    case 3:
      [token1, token2, token3] = tokens
      return token1 !== token2 !== token3
    default:
      return false
  }
}