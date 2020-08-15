import DEVELOPMENT_CARDS from '../../assets/developmentCards.json'
import NOBLES from '../../assets/nobles.json'
import {
  getTokenValidator,
  tokenLimitValidator,
  buyDevelopmentValidator,
  reserveDevelopmentValidator
} from './validator'
import { takeTokens, returnTokens, getLackAmount } from '../lib/utils'

const developCards = Object.keys(DEVELOPMENT_CARDS).reduce((cards, cardId) => {
  const { grade, id } = DEVELOPMENT_CARDS[cardId]
  switch (grade) {
    case 1:
      cards.gradeOne.push(id)
      return cards
    case 2:
      cards.gradeTwo.push(id)
      return cards
    case 3:
      cards.gradeThree.push(id)
      return cards
    default:
      return cards
  }
}, { gradeOne: [], gradeTwo: [], gradeThree: [] })

const game = (playerNames) => {
  const Splendor = {
    name: "splendor",

    setup: ({ numPlayers, random, ...G }) => {
      const developOneDeck = random.Shuffle(developCards.gradeOne)
      const developTwoDeck = random.Shuffle(developCards.gradeTwo)
      const developThreeDeck = random.Shuffle(developCards.gradeThree)

      const board = {}
      board.dev10 = developOneDeck.pop()
      board.dev11 = developOneDeck.pop()
      board.dev12 = developOneDeck.pop()
      board.dev13 = developOneDeck.pop()

      board.dev20 = developTwoDeck.pop()
      board.dev21 = developTwoDeck.pop()
      board.dev22 = developTwoDeck.pop()
      board.dev23 = developTwoDeck.pop()

      board.dev30 = developThreeDeck.pop()
      board.dev31 = developThreeDeck.pop()
      board.dev32 = developThreeDeck.pop()
      board.dev33 = developThreeDeck.pop()

      const tokenStore = {}
      const tokenCount = numPlayers * 2 - 1 + (numPlayers === 2 ? 1 : 0)
      tokenStore.red
        = tokenStore.blue
        = tokenStore.black
        = tokenStore.white
        = tokenStore.green
        = tokenCount
      tokenStore.yellow = 5

      const fields = {}
      const defaultValues = { white: 0, red: 0, blue: 0, green: 0, black: 0, yellow: 0 }
      Array(numPlayers).fill(1).forEach((a, i) => {
        fields[`player${i}`] = {
          name: playerNames[i],
          developments: { ...defaultValues },
          tokenAssets: { ...defaultValues },
          reservedDevs: [],
          nobles: [],
          hand: {
            tokens: [],
            development: null,
            gettableNobles: []
          },
          victoryPoints: 0,
          done: true
        }
      })

      const nobleLimit = numPlayers + 1
      const nobleTiles = random.Shuffle(Object.keys(NOBLES)).slice(0, nobleLimit)

      return {
        fields,
        board,
        tokenStore,
        developOneDeck,
        developTwoDeck,
        developThreeDeck,
        nobleTiles
      }
    },

    moves: {
      selectDevelopment(G, ctx, devId, current, next, cb = () => { }) {
        const { fields, board } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        if (hand.development) {
          const { index, grade, development } = current
          board[`dev${grade}${index}`] = development
        }
        hand.development = devId
        const { grade, index } = next
        board[`dev${grade}${index}`] = null

        cb(hand.development)
      },

      deselectDevelopment(G, ctx, current, cb = () => { }) {
        const { fields, board } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]

        if (!hand.development) {
          return
        }

        const { grade, index } = current

        board[`dev${grade}${index}`] = hand.development
        hand.development = null

        cb()
      },

      buyDevelopment(G, ctx, current, cb = () => { }) {
        const {
          fields,
          developOneDeck,
          developTwoDeck,
          developThreeDeck,
          board,
          tokenStore,
          nobleTiles
        } = G
        const currentPlayer = fields[`player${ctx.currentPlayer}`]
        const { developments, tokenAssets, hand } = currentPlayer

        const targetDevelopment = DEVELOPMENT_CARDS[hand.development]
        const { value, valueAmount, victoryPoint, cost } = targetDevelopment

        const lackAmount = getLackAmount({ developments, token: tokenAssets }, cost)
        const buyable = tokenAssets.yellow >= lackAmount

        if (buyable) {
          const lack = Object.keys(tokenAssets).reduce((diff, color) => {
            const individualCost = cost[color] || 0
            const discountedIndividualCost = individualCost > developments[color] ? individualCost - developments[color] : 0
            if (discountedIndividualCost > tokenAssets[color]) {
              const toPay = discountedIndividualCost - tokenAssets[color]
              const payable = tokenAssets[color]
              diff += (toPay - payable)
              tokenAssets[color] -= payable
              tokenStore[color] += payable
            } else {
              tokenAssets[color] -= discountedIndividualCost
              tokenStore[color] += discountedIndividualCost
            }

            return diff
          }, 0)
          tokenAssets.yellow -= lack
          tokenStore.yellow += lack

        developments[value] += valueAmount
        currentPlayer.victoryPoints += victoryPoint

        const deck = {
          '1': developOneDeck,
          '2': developTwoDeck,
          '3': developThreeDeck
        }
        const { grade, index } = current
        board[`dev${grade}${index}`] = deck[grade].pop()
        hand.development = null


        cb()
        currentPlayer.done = true
        // ctx.events.endTurn()

        } else {
          alert('비용이 모자랍니다.')
        }
      },

      reserveDevelopment(G, ctx, current, cb = () => { }) {
        const {
          fields,
          developOneDeck,
          developTwoDeck,
          developThreeDeck,
          board,
          tokenStore
        } = G
        const currentPlayer = fields[`player${ctx.currentPlayer}`]
        const { reservedDevs, tokenAssets, hand } = currentPlayer

        const targetDevelopment = DEVELOPMENT_CARDS[hand.development]

        const able = reserveDevelopmentValidator(reservedDevs)
        if (able) {
          if (tokenStore.yellow) {
            tokenStore.yellow--
            tokenAssets.yellow++
          }
          reservedDevs.push(targetDevelopment.id)

          const deck = {
            '1': developOneDeck,
            '2': developTwoDeck,
            '3': developThreeDeck
          }
          const { grade, index } = current
          board[`dev${grade}${index}`] = deck[grade].pop()
          hand.development = null

          const tokenLimit = 10
          const tokenCount = Object.values(tokenAssets).reduce((count, token) => count + token)
          if (tokenCount > tokenLimit) {
            ctx.events.setStage('returnTokens')
            cb(tokenCount - tokenLimit)
          } else {
            cb()
            currentPlayer.done = true
            // ctx.events.endTurn()
          }
        } else {
          alert('더 이상 예약할 수 없습니다.')
        }
      },

      selectToken(G, ctx, token, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        if (tokenStore[token]) {
          tokenStore[token]--
          hand.tokens.push(token)
        }
        const result = getTokenValidator(hand.tokens, tokenStore)
        cb(result)
      },

      deselectToken(G, ctx, index, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        const [token] = hand.tokens.splice(index, 1)
        tokenStore[token]++
        const result = getTokenValidator(hand.tokens)
        cb(result)
      },

      cancelSelectedToken(G, ctx, cb = () => { }) {
        const { tokenStore, fields } = G
        const { hand } = fields[`player${ctx.currentPlayer}`]
        hand.tokens.forEach(token => {
          tokenStore[token]++
        })
        hand.tokens.length = 0
        cb()
      },

      getTokens(G, ctx, cb) {
        const { fields } = G
        const currentPlayer = fields[`player${ctx.currentPlayer}`]
        const { hand, tokenAssets } = currentPlayer
        hand.tokens.forEach(token => {
          tokenAssets[token]++
        })
        hand.tokens = []

        const tokenLimit = 10
        const tokenCount = Object.values(tokenAssets).reduce((count, token) => count + token)
        if (tokenCount > tokenLimit) {
          ctx.events.setStage('returnTokens')
          cb(tokenCount - tokenLimit)
        } else {
          cb()
          currentPlayer.done = true
          // ctx.events.endTurn()
        }
      }
    },

    turn: {
      // endIf: (G, ctx) => ({ next: '3' }),
      onBegin: (G, ctx) => {
        const { fields } = G
        const currentPlayer = fields[`player${ctx.currentPlayer}`]
        currentPlayer.done = false
      },

      onMove: (G, ctx) => {
        const { fields, nobleTiles } = G
        const currentPlayer = fields[`player${ctx.currentPlayer}`]
        const { developments, tokenAssets, hand, done } = currentPlayer
        if (!done) {
          return
        }

        const gettableNobles = nobleTiles.filter(
          noble => Object.keys(NOBLES[noble].condition)
            .every(color => developments[color] >= NOBLES[noble].condition[color])
        )

        if (gettableNobles.length) {
          hand.gettableNobles = gettableNobles
          ctx.events.setStage('getNoble')
        } else if (hand.tokens.length !== 0 || hand.development) {
          console.log('still hand')
        } else {
          console.log('nope')
          ctx.events.endTurn()
        }
      },
      stages: {
        returnTokens: {
          moves: {
            returnTokens(G, ctx, token, cb = () => { }) {
              const { fields, tokenStore } = G
              const { tokenAssets } = fields[`player${ctx.currentPlayer}`]
              tokenAssets[token]--
              tokenStore[token]++
              const tokenCount = Object.values(tokenAssets).reduce((a, t) => a + t)
              const tokenLimit = 10
              if (tokenCount <= tokenLimit) {
                cb()
                ctx.events.endTurn()
              }
            }
          }
        },
        getNoble: {
          moves: {
            selectGetNoble(G, ctx, noble, cb = () => { }) {
              const { fields, nobleTiles } = G
              const currentPlayer = fields[`player${ctx.currentPlayer}`]
              const { hand, nobles } = currentPlayer
              nobles.push(noble)
              hand.gettableNobles = []
              const targetIndex = nobleTiles.findIndex(n => n === noble)
              nobleTiles.splice(targetIndex, 1)
              currentPlayer.victoryPoints += NOBLES[noble].victoryPoint

              ctx.events.endTurn()
            }
          }
        }
      }
    },

    endIf: (G, ctx) => {
      return false
      // if (IsVictory(G.cells)) {
      //   return { winner: ctx.currentPlayer }
      // }
      // if (G.cells.filter(c => c === null).length === 0) {
      //   return { draw: true }
      // }
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
  return Splendor
}

export default game
