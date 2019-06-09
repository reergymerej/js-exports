import { default as defaultAlias } from './foo'
import { count as countAlias } from './foo'

console.log(defaultAlias.count)
console.log(defaultAlias.count)
console.log(defaultAlias.count)

console.log(countAlias)
console.log(countAlias)
console.log(countAlias)


(defaultAlias.count === countAlias)


// console.log('wholeFoo.count', wholeFoo.count)
// console.log('wholeFoo.count', wholeFoo.count)
// console.log('wholeFoo.count', wholeFoo.count)
// console.log('wholeFoo.default.count', wholeFoo.default.count)
// console.log('wholeFoo.default.count', wholeFoo.default.count)
// console.log('wholeFoo.default.count', wholeFoo.default.count)
