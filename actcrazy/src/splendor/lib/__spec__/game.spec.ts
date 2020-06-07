import { validateGetTokens, createTokens } from '../game'

describe('토큰 가져오기', () => {
  const emptyTokens = createTokens(0, 0, 0, 0, 0);

  it('3개이상의 토큰을 가지고 올 수 없다.', () => {
    const ret = validateGetTokens(emptyTokens, createTokens(1, 1, 1, 1, 0))
    expect(ret).toBe(false)
  })

  it('같은 색상 토큰 2개를 가지고 올 경우, 다른 색상 토큰을 가지고 올 수 없다.', () => {
    const ret = validateGetTokens(emptyTokens, createTokens(2, 1, 0, 0, 0))
    expect(ret).toBe(false)
  })

  it('수량이 있는 토큰을 각각 1개씩 3개를 가지고 올 수 있다.', () => {
    const ret = validateGetTokens(createTokens(1, 1, 1, 0, 0), createTokens(1, 1, 1, 0, 0))
    expect(ret).toBe(true)
  })

  it('deck에 없는 토큰은 가지고 올 수 없다.', () => {
    const ret = validateGetTokens(createTokens(1, 0, 1, 1, 0), createTokens(1, 1, 1, 0, 0))
    expect(ret).toBe(false)
  })

  it('3개 이하인 토큰은 2개를 가지고 올 수 없다.', () => {
    const ret = validateGetTokens(createTokens(3, 0, 1, 1, 0), createTokens(2, 0, 0, 0, 0))
    expect(ret).toBe(false)
  })

  it('4개 이상인 토큰은 2개를 가지고 올 수 있다.', () => {
    const ret = validateGetTokens(createTokens(4, 0, 1, 1, 0), createTokens(2, 0, 0, 0, 0))
    expect(ret).toBe(true)
  })
})

describe('카드 구입하기', () => {
})
