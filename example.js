    /*eslint-disable vars-on-top*/
    var enumerateArray = require("./enumerate-array")
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