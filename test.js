const
  Nonce = require('./index'),
  expect = require('expect.js')

describe('nonce', () => {
  it('doesnt duplicate', () => {
    const nonce = Nonce()
    let last = null

    for (let i = 0; i < 1000; i++) {
      let now = nonce()
      expect(now).to.not.be(last)
      last = now
    }
  })
})

