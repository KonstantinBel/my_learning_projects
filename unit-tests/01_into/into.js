const sum = (a, b) => a + b
const nativeNull = () => null

const makeCount = () => {
  let c = 1
  return () => c++
}

module.exports = { sum, nativeNull, makeCount }
