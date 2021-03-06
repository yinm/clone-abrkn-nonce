module.exports = (length) => {
  let
    last = null,
    repeat = 0

  if (typeof length === 'undefined') length = 15

  return function() {
    const now = Math.pow(10, 2) * new Date()

    if (now === last) {
      repeat++
    } else {
      repeat = 0
      last = now
    }

    const s = (now + repeat).toString()
    return Number(s.substr(s.length - length))
  }
}