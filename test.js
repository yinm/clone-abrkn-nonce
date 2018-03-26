const
  Nonce = require('./index'),
  expect = require('expect.js')

describe('nonce', function() {
  it('doesnt duplicate', function() {
    const nonce = Nonce()
    let last = null

    for (let i = 0; i < 1000; i++) {
      let now = nonce()
      expect(now).to.not.be(last)
      last = now
    }
  })
})

