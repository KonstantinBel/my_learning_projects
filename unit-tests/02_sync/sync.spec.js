const { Lo } = require('./sync')

const _ = new Lo()

describe('Lodash compact', () => {
  let arr
  
  beforeEach(() => {
    arr = [false, 43, 0, true, null, 'qwe']
  })

  it('should be defined', () => {
    expect(_.compact).toBeDefined()
  })

  it('should NOT contains falsy values', () => {
    expect(_.compact).not.toContain(false)
    expect(_.compact).not.toContain(null)
    expect(_.compact).not.toContain(0)
    expect(_.compact).not.toContain('')
  })

  it('should ', () => {
    const result = [43, true, 'qwe']
    expect(_.compact(arr)).toEqual(result)
  })
})

describe('Lodash group by', () => {
  it('should be defined', () => {
    expect(_.groupBy).toBeDefined()
  })
})
