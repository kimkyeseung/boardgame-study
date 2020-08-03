import { validateGetGems, Board, createTokens, createDevelopment, createGems, validateBuyCard, addTokens, addDevelopment, validateReturnTokens, getCardFromMatt, getCardFromReserved } from '../game'

describe('가져올 토큰 검증하기', () => {
  const emptyTokens = createTokens(0, 0, 0, 0, 0, 0);

  it('3개이상의 토큰을 가지고 올 수 없다.', () => {
    const ret = validateGetGems(emptyTokens, createGems(1, 1, 1, 1, 0))
    expect(ret).toBe(false)
  })

  it('같은 색상 토큰 2개를 가지고 올 경우, 다른 색상 토큰을 가지고 올 수 없다.', () => {
    const ret = validateGetGems(emptyTokens, createGems(2, 1, 0, 0, 0))
    expect(ret).toBe(false)
  })

  it('수량을 0개 미만으로 지정할 수 없다.', () => {
    const ret = validateGetGems(createTokens(1, 1, 1, 1, 1, 1), createGems(1, 1, 1, 1, -1))
    expect(ret).toBe(false)
  })

  it('수량이 있는 토큰을 각각 1개씩 3개를 가지고 올 수 있다.', () => {
    const ret = validateGetGems(createTokens(1, 1, 1, 0, 0, 0), createGems(1, 1, 1, 0, 0))
    expect(ret).toBe(true)
  })

  it('deck에 없는 토큰은 가지고 올 수 없다.', () => {
    const ret = validateGetGems(createTokens(1, 0, 1, 1, 0, 0), createGems(1, 1, 1, 0, 0))
    expect(ret).toBe(false)
  })

  it('3개 이하인 토큰은 2개를 가지고 올 수 없다.', () => {
    const ret = validateGetGems(createTokens(3, 0, 1, 1, 0, 0), createGems(2, 0, 0, 0, 0))
    expect(ret).toBe(false)
  })

  it('4개 이상인 토큰은 2개를 가지고 올 수 있다.', () => {
    const ret = validateGetGems(createTokens(4, 0, 1, 1, 0, 0), createGems(2, 0, 0, 0, 0))
    expect(ret).toBe(true)
  })
})

describe('10개가 넘는 토큰 반납 검증하기', () => {
  it('핸드에 있는 것보다 많은 토큰을 반납할 수 없다.', () => {
    const ret1 = validateReturnTokens(createTokens(0, 11, 0, 0, 0, 0), createTokens(1, 0, 0, 0, 0, 0))
    expect(ret1).toBe(false)

    const ret2 = validateReturnTokens(createTokens(1, 11, 0, 0, 0, 0), createTokens(2, 0, 0, 0, 0, 0))
    expect(ret2).toBe(false)
  })

  it('반납 토큰을 0개 미만으로 할 수 없다.', () => {
    const ret = validateReturnTokens(createTokens(0, 9, 0, 0, 0, 0), createTokens(0, -1, 0, 0, 0, 0))
    expect(ret).toBe(false)
  })

  it('반납 후 남은 토큰의 합은 10개이다.', () => {
    const ret1 = validateReturnTokens(createTokens(0, 11, 0, 0, 0, 0), createTokens(0, 1, 0, 0, 0, 0))
    expect(ret1).toBe(true)

    const ret2 = validateReturnTokens(createTokens(0, 11, 0, 0, 0, 0), createTokens(0, 2, 0, 0, 0, 0))
    expect(ret2).toBe(false)

    const ret3 = validateReturnTokens(createTokens(0, 12, 0, 0, 0, 0), createTokens(0, 1, 0, 0, 0, 0))
    expect(ret3).toBe(false)
  })
})

describe('카드 구입하기', () => {
  const card1 = createDevelopment(1, 0, createGems(2, 2, 0, 0, 0), createGems(0, 0, 0, 0, 0));
  const card2 = createDevelopment(1, 0, createGems(2, 1, 0, 0, 0), createGems(1, 0, 0, 0, 0));
  const card3 = createDevelopment(2, 0, createGems(2, 1, 1, 0, 0), createGems(0, 0, 0, 0, 0));
  const card4 = createDevelopment(2, 0, createGems(3, 2, 0, 0, 0), createGems(0, 0, 0, 0, 0));

  const board: Board = {
    tokens: createTokens(0, 0, 0, 0, 0, 0), 
    noble: [],
    deck: { 1: [], 2: [], 3: [] },
    matt: { 1: [card1], 2: [card3, card4], 3: [] },
    hands: {
      p1: {
        tokens: createTokens(0, 0, 0, 0, 0, 0), 
        development: [],
        reserved: [card2],
        noble: [],
      }
    }
  };

  it('바닥에서 지정된 카드를 가져온다.', () => {
    const ret = getCardFromMatt(board.matt, 2, 0);
    expect(ret).toStrictEqual(card3)
  })

  it('p1의 예약목록에 있는 카드를 가져온다.', () => {
    const ret = getCardFromReserved(board.hands.p1, 0);
    expect(ret).toStrictEqual(card2)
  })

  it('구매할 카드 비용이상의 보석 토큰을 가지고 있으면 카드 구입이 가능하다.', () => {
    const b = addTokens('p1', createTokens(2, 2, 0, 0, 0, 0), board);
    const ret = validateBuyCard(b.hands.p1, card1);
    expect(ret).toBe(true)
  })

  it('구매할 카드 비용보다 가지고 있는 보석 토큰이 부족하면 카드를 구입할 수 없다.', () => {
    const b = addTokens('p1', createTokens(2, 1, 0, 0, 0, 0), board);
    const ret = validateBuyCard(b.hands.p1, card1);
    expect(ret).toBe(false)
  })

  it('부족한 토큰을 황금 토큰으로 대체할 수 있다.', () => {
    const b = addTokens('p1', createTokens(2, 1, 0, 0, 0, 1), board);
    const ret = validateBuyCard(b.hands.p1, card1);
    expect(ret).toBe(true)
  })

  it('손에 있는 카드의 할인을 적용 받는다.', () => {
    const b1 = addDevelopment('p1', card2, board);
    const b2 = addTokens('p1', createTokens(1, 2, 0, 0, 0, 0), b1);
    const ret = validateBuyCard(b2.hands.p1, card1);
    expect(ret).toBe(true)
  })
})
