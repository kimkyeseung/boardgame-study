export const getToken = () => {

}

export const payToken = () => {

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