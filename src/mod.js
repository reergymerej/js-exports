let count = 0

const foo = {
  get count() {
    return count++
  },
}

module.exports = foo
export default foo
