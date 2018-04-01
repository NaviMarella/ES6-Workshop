
function getAddress() {
    return {
      city: 'Salt Lake City',
      state: 'UT',
      zip: 84115,
      coords: {
        lat: 40.776608,
        long: -111.920485,
      },
    }
  }
  
  function getNumbers() {
    return [1, 2, 3, 4, 5, 6]
  }
  
  function getNestedNumbers() {
    return [1, 2, [3, 4, [5, 6]]]
  }

 // 1. Use destructuring to create get City, state and zip by making a call to getAddress() method
 
 // 2. Using destructuring, call `getAddress()` and create an 'address' variable.

 // 3. Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively

 // 4. Call getNumbers and pull the first value out as `one` and the third as `three`

 // 5. Using destructuring, call `getAddress()` and create `lat` and `long` variables.