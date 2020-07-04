const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._))

export const add = curry((a, b) => a + b)
export const sum = (arr) => arr.reduce(add, 0)
export const get = curry((key, obj) => obj[key])
export const first = (arr) => arr[0]
export const last = (arr) => arr[arr.length - 1]
export const values = (obj) => Object.values(obj)
export const keys = (obj) => Object.keys(obj)
export const entries = (obj) => Object.entries(obj)

export const getId = () => Math.round(Math.random() * 9999999)
