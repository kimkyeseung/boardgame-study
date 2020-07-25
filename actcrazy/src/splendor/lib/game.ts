import * as R from 'ramda'

interface Gems {
  diamond: number;
  sapphire: number;
  emerald: number;
  ruby: number;
  onyx: number;
}

interface Gold {
  gold: number;
}

export type Tokens = Gems & Gold;

export const createGems = (diamond: number, sapphire: number, emerald: number, ruby: number, onyx: number): Gems => ({
  diamond, sapphire, emerald, ruby, onyx,
});

export const createTokens = (diamond: number, sapphire: number, emerald: number, ruby: number, onyx: number, gold: number): Tokens => ({
  diamond, sapphire, emerald, ruby, onyx, gold,
})

type F = <T>(x: T, y: T) => T;
export const evalTokens = (f: F) => R.curry((x: Tokens, y: Tokens): Tokens => R.mapObjIndexed((v, k) => f(v, y[k]), x))
export const evalGems = (f: F) => R.curry((x: Gems, y: Gems): Gems => {
  const x1: Gems = R.pickAll(['emerald', 'diamond', 'sapphire', 'onyx'], x);
  const y1: Gems = R.pickAll(['emerald', 'diamond', 'sapphire', 'onyx'], y);
  return R.mapObjIndexed((v, k) => f(v, y1[k]), x1)
})

type Level = 1 | 2 | 3;
export interface Development {
  level: Level;
  score: number;
  cost: Readonly<Gems>;
  discount: Readonly<Gems>;
}

export const createDevelopment = (
  level: Level, score: number, cost: Readonly<Gems>, discount: Readonly<Gems>,
): Development => ({
  level, score, cost: { ...cost }, discount: { ...discount },
});

export interface Noble {
  score: number;
  cost: Gems;
}

export const createNoble = (score: number, cost: Readonly<Gems>): Noble => ({
  score, cost: { ...cost },
})

interface Hand {
  tokens: Tokens;
  development: readonly Development[];
  reserved: readonly Development[];
  noble: readonly Noble[];
};

type Player = string | number;

export interface Board {
  tokens: Tokens;
  noble: readonly Noble[];
  deck: { [key in Level]: Development[] };
  matt: { [key in Level]: Development[] };
  hands: {
    [key in Player]: Hand;
  }
}

export const addTokens = (p: Player, tokens: Tokens, b: Board): Board =>
  R.assocPath(['hands', p, 'tokens'], evalTokens(R.add)(b.hands[p].tokens, tokens), b);

export const addDevelopment = (p: Player, card: Development, b: Board): Board =>
  R.over(R.lensPath(['hands', p, 'development']), R.append(card), b);

const isNegative = (x: number) => x < 0;
const anyNegative = R.any(isNegative)

export const validateGetTokens = (boardTokens: Tokens, tokens: Tokens): boolean => {
  const t = R.values(tokens);
  if (anyNegative(t)) {
    return false;
  }

  const sum = R.sum(t);

  if (sum > 3) {
    return false;
  }

  const sameIndex = R.findIndex(R.equals(2), t);
  const filtered = R.reject(R.equals(0), t);
  if (sameIndex != -1 && filtered.length !== 1) {
    return false;
  }

  if (sum === 3) {
    const c = evalTokens(R.subtract)(boardTokens, tokens)
    if (anyNegative(R.values(c))) {
      return false;
    }

    return true;
  }

  if (sum === 2 && sameIndex !== -1) {
    const key = R.keys(tokens)[sameIndex] as (keyof Tokens)
    if (boardTokens[key] < 4) {
      return false
    }

    return true;
  }

  return false;
}

export const validateReturnTokens = (handTokens: Tokens, tokens: Tokens): boolean => {
  if (anyNegative(R.values(tokens))) {
    return false;
  }

  const ret = evalTokens(R.subtract)(handTokens, tokens);
  if (anyNegative(R.values(ret))) {
    return false;
  }

  if (R.sum(R.values(ret)) === 10) {
    return true;
  }

  return false;
}

export const validateBuyCard = (b: Board, p: Player, pos: [Level, number] | number) => {
  let card: Development | undefined = undefined;
  if (typeof pos === 'number') {
    card = b.hands[p].reserved[pos];
  } else {
    const [level, p] = pos;
    card = b.matt[level][p];
  }

  if (R.isNil(card)) {
    return false;
  }

  const tokens = b.hands[p].tokens;
  if (R.isNil(tokens)) {
    return false;
  }

  const discount: Gems = R.reduce(
    evalGems(R.add),
    createGems(0, 0, 0, 0, 0),
    R.pluck('discount', b.hands[p].development));

  const cost = evalGems(R.subtract)(card.cost, discount);
  const change = evalGems(R.subtract)(tokens, cost);
  const sumLack = R.sum(R.filter(isNegative, R.values(change)))
  const isLack = sumLack + tokens.gold < 0;
  if (isLack) {
    return false;
  }

  return true;
}

/*
const Splendor = {
  name: "splendor",

  setup: () => ({
    cells: Array(9).fill(null)
  }),

  moves: {
    clickCell(G, ctx, id) {
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer
      }
    }
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer }
    }
    if (G.cells.filter(c => c === null).length === 0) {
      return { draw: true }
    }
  },

  ai: {
    enumerate: G => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] })
        }
      }
      return moves
    }
  }
}

export default TicTacToe
*/
