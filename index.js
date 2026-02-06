const falseValue = require("false-value")
const RequireObjectCoercible = require("es-object-atoms/RequireObjectCoercible")
const not = require("es-logical-not-operator")

module.exports = function isNil(value) {
  try {
    RequireObjectCoercible(value)
    return falseValue()
  } catch {
    return not(value)
  }
}