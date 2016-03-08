;(function () {
  "use strict"
  var expect = require("chai").expect
  var enumerateArray = require("../../enumerate-array")

  function noop() {}

  describe("enumerate", () => {
    it("should not alter the original array", () => {
      var originalArray = [1, 2, 3]
      var enumeration = enumerateArray(originalArray)

      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.equal(1)
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.equal(2)
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.equal(3)
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.false
    })
    it("should throw a meaningful message on calling next when empty", () => {
      var enumeration = enumerateArray([])

      expect( enumeration.hasNext() ).to.be.false
      expect( enumeration.next.bind(enumeration) ).to.throw("Don't call next() without checking hasNext()")
    })
    it("should handle undefined array elements", () => {
      var originalArray = [1, noop(), 3]
      var enumeration = enumerateArray(originalArray)

      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.equal(1)
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.be.undefined
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.true
      expect( enumeration.next() ).to.equal(3)
      expect(originalArray.length).to.equal(3)
      expect( enumeration.hasNext() ).to.be.false
    })
    it("should should clone the state of its internal array", () => {
      var originalArray = "abcde".split("")
      var enumeration = enumerateArray(originalArray)

      expect( enumeration.next() ).to.equal("a")
      expect( enumeration.toArray() ).to.eql( "bcde".split("") )
      expect( enumeration.next() ).to.equal("b")
      expect( enumeration.toArray() ).to.eql( "cde".split("") )
    })
    it("should get indignant when you try next() without hasNext()", () => {
      var originalArray = []
      var enumeration = enumerateArray(originalArray)

      expect( enumeration.next.bind(enumeration) ).to.throw(Error)
    })
    it("should throw trying to enumerate anything without a silce() method", () => {
      expect(  enumerateArray.bind( this, noop() )  ).to.throw(Error)
      expect( enumerateArray.bind(this, null) ).to.throw(Error)
      expect( enumerateArray.bind(this, 1) ).to.throw(Error)
      expect( enumerateArray.bind(this, "ABC") ).to.not.throw(Error)
    })
  })
})()
