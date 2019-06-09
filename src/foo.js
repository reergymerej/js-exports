let count = 0

module.exports = {
  get count() {
    console.log('calling getter')
    return count++
  },
}
