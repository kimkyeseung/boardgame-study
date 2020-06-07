import * as R from 'ramda'

interface Gems {
  emerald: number;
  diamond: number;
  sapphire: number;
  onyx: number;
}

interface Gold {
  gold: number;
}

export type Tokens = Gems & Gold;

export const createGems = (emerald: number, diamond: number, sapphire: number, onyx: number): Gems => ({
  emerald, diamond, sapphire, onyx,
});

export const createTokens = (emerald: number, diamond: number, sapphire: number, onyx: number, gold: number): Tokens => ({
  emerald, diamond, sapphire, onyx, gold,
})

type F = <T>(x: T, y: T) => T;
export const evalTokens = (f: F) => (x: Tokens, y: Tokens): Tokens => R.mapObjIndexed((v, k) => f(v, y[k]), x)

type Level = 1 | 2 | 3;
interface Development {
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

interface Noble {
  score: number;
  cost: Gems;
}

interface Hand {
  tokens: Tokens;
  development: readonly Development[];
  noble: readonly Noble[];
};

type Player = string | number;

export interface Board {
  players: readonly Player[];
  tokens: Tokens;
  noble: readonly Noble[];
  deck: readonly [readonly Development[], readonly Development[], readonly Development[]];
  matt: readonly [readonly Development[], readonly Development[], readonly Development[]];
  hands: readonly Hand[];
}

export const validateGetTokens = (boardTokens: Tokens, tokens: Tokens): boolean => {
  const t = R.values(tokens);
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
    if (R.any(x => x < 0, R.values(c))) {
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
