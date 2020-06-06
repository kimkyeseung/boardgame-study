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

export const createTokens = (emerald: number, diamond: number, sapphire: number, onyx: number, gold: number) => ({
  emerald, diamond, sapphire, onyx, gold,
})

type F = <T>(x: T, y: T) => T;
export const evalTokens = (f: F) => (x: Tokens, y: Tokens): Tokens => R.mapObjIndexed((v, k) => f(v, y[k]), x)

interface Development {
  level: 1 | 2 | 3
  score: number;
  cost: Gems;
  discount: Gems;
}

interface Noble {
  score: number;
  cost: Gems;
}

interface GameSet {
  tokens: Tokens;
  development: readonly Development[];
  noble: readonly Noble[];
};

type Player = string | number;

export interface Board {
  players: readonly Player[];
  deck: GameSet;
  hands: readonly GameSet[];
}

export const validateGetTokens = (b: Board, _p: Player, tokens: Tokens): boolean => {
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
    const c = evalTokens(R.subtract)(b.deck.tokens, tokens)
    if (R.any(x => x < 0, R.values(c))) {
      return false;
    }

    return true;
  }

  if (sum === 2 && sameIndex !== -1) {
    const key = R.keys(tokens)[sameIndex] as (keyof Tokens)
    if (b.deck.tokens[key] < 4) {
      return false
    }

    return true;
  }

  return false;
}
