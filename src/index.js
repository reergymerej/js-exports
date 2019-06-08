import { count } from './mod'
import * as mod from './mod'

const out = console.log

// stuck with first value, copied onto local identifier "mod"
out(mod.count)
out(mod.count)
out(mod.count)

// iterates as expected, using getter
out(count)
out(count)
out(count)

// also iterates
out(mod.default.count)
out(mod.default.count)
out(mod.default.count)

out(Object.getOwnPropertyDescriptor(mod, 'count'))

out(Object.getOwnPropertyDescriptor(mod.default, 'count'))
