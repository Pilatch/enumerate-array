# enumerate-array

Node utility that clones an Array and wraps it in a [Java-like Enumeration interface](https://docs.oracle.com/javase/7/docs/api/java/util/Enumeration.html).

## Usage

    var enumerateArray = require("enumerate-array")
    var enumeration = enumerateArray(["foo", "bar", "baz"])

That enumeration has the following methods:

    .hasNext() // returns a Boolean showing whether the enumeration has more elements
    .next() // remove the next element from the enumeration, and return it
    .toArray() // clone the enumeration's internal array, and return it
    .toString() // return the internal array's .toString()

## Examples

Here we loop through an array, while-style.

    var enumerateArray = require("enumerate-array")
    var greenIceCreamsArray = ["pistachio", "mint chocolate chip", "green tea"]
    var greenIceCreamsEnumeration = enumerateArray(greenIceCreamsArray)

    while ( greenIceCreamsEnumeration.hasNext() ) {
      console.log( greenIceCreamsEnumeration.next() )
    }
    // -> "pistachio"
    // -> "mint chocolate chip"
    // -> "green tea"

    console.log(greenIceCreamsArray) // the original array is unchanged
    // -> [ "pistachio", "mint chocolate chip", "green tea" ]

We can also get a copy of the enumeration as an array, minus the elements we used.

    var coolNumbersArray = [2.71828, 3.14159, 42, 451, 1984, 9001, 8675309]
    var coolNumbersEnumeration = enumerateArray(coolNumbersArray)

    console.log( coolNumbersEnumeration.next() )
    // -> 2.71828
    console.log( coolNumbersEnumeration.next() )
    // -> 3.14159
    console.log( coolNumbersEnumeration.toArray() )
    // -> [ 42, 451, 1984, 9001, 8675309 ]
    console.log( coolNumbersEnumeration.next() )
    // -> 42