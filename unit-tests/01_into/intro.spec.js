const { sum, nativeNull, makeCount } = require('./into')

describe('Sum function', () => {
  it('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
  })
  
  it('should return value correctly comparing to other', () => {
    expect(5).toBeGreaterThan(3)
    expect(5).toBeGreaterThanOrEqual(5)
    expect(5).toBeLessThan(10)
    expect(5).toBeLessThanOrEqual(5)
  })
  
  it('should sum 2 float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native null function', () => {
  it('should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})

describe('MakeCount function:', () => {
  let counter

  beforeEach(() => {
    counter = jest.fn(makeCount())
  })

  it('Should return function' , () => {
    expect(makeCount()).toBeInstanceOf(Function)
  })

  it('Result function should cont', () => {
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)
    expect(counter()).toBe(3)
    expect(counter.mock.calls.length).toBe(3)
  })

  it('Result function should work', () => {
    counter.mockReturnValue(42)

    expect(counter()).toBe(42)
    expect(counter()).toBe(42)
  })
})
