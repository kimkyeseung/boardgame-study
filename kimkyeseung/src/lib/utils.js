export const holdTokens = (tokenStore, player, color) => {

}

export const takeTokens = (tokenStore, player, color) => {

}

export const returnTokens = () => {

}

export const getLackAmount = ({ developments, token }, cost) => {
  const total = {}
  Object.keys(developments).forEach(color => {
    total[color] = developments[color] + token[color]
  })
  const lack = Object.keys(cost)
    .reduce((diffAmount, color) => cost[color] > total[color]
      ? diffAmount + (cost[color] - total[color])
      : diffAmount, 0)

  return lack
}