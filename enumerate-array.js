module.exports = function (originalArray) {
  "use strict"
  return new Enumeration(originalArray)
}

function Enumeration(originalArray) {
  "use strict"
  var internalArray = originalArray.slice(0)

  this.hasNext = function () {
    return internalArray.length !== 0
  }
  this.next = function () {
    if (this.hasNext()) {
      return internalArray.shift()
    }
    throw new Error("Don't call next() without checking hasNext()")
  }
  this.toArray = function () {
    return internalArray.slice(0)
  }
  this.toString = function () {
    return internalArray.toString()
  }
}
