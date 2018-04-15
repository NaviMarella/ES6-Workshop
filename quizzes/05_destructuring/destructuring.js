function getAverage() {
    // refactor with object destructuring
    const { x, y, z } = {x: 3.6, y: 7.8, z: 4.3}
    return Math.floor((x + y + z) / 3.0)
  }
  // console.log(getAverage())
  
  function getAvgTemp() {
    // refactor with nested destructuring
    const weather = {
      location: 'Toronto',
      unit: 'Celsius',
      today: {max: 2.6, min: -6.3},
      tomorrow: {max: 3.2, min: -5.8},
    }
    const {
      unit,
      today: {
        max: maxToday,
        min: minToday
      },
      tomorrow: {
        min: minTomorrow,
        max: maxTomorrow
      }
    } = weather
  
    return {
      max: (maxToday + maxTomorrow) / 2.0,
      min: (minToday + minTomorrow) / 2.0,
      unit,
    }
  }
  // console.log(getAvgTemp())
  
  function getFirstTwo() {
    // refactor with array destructuring
    const arr = [0, 1, 2, 3, 4, 5, 6, 7]
    const { ... arr} = arr
  
    return {
      firstItem: firstItem,
      secondItem: secondItem,
    }
  }
  // console.log(getFirstTwo())
  
  function getElements() {
    // returns 1st, 2nd and last element from an array
    // refactor with skipped destructuring for arrays
    const arr = [0, 1, 2, 3, 4, 5, 6, 7]
    const first = arr[0]
    const second = arr[1]
    const fifth = arr[4]
  
    return {
      first: first,
      second: second,
      fifth: fifth,
    }
  }
  // console.log(getElements())
  
  function getSecondItem() {
    // refactor with nested destructuring of arrays
    const food = [
      ['carrots', 'beans', 'peas', 'lettuce'],
      ['apple', 'mango', 'orange'],
      ['cookies', 'cake', 'pizza', 'chocolate'],
    ]

    const [ [, firstItem], [, secondItem], [, thirdItem]] = food
  
    return {
      first: firstItem,
      second: secondItem,
      third: thirdItem,
    }
  }
  // console.log(getSecondItem())
  
  function defaultValues() {
    const bench = {type: 'Piano', adjustable: false}
    const legCount = bench.legs === undefined ? getDefaultLegCount() : bench.legs
    return legCount
  
    function getDefaultLegCount() {
      return 4
    }
  }
  // console.log(defaultValues())
  
  function ontoAnObject() {
    // refactor this to destructuring
    const array = [1, 2, 3, 4, 5, 6]
    const object = {}
    const [ one, two, three, ...rest ]

    return object
  }
  console.log(ontoAnObject())
  
  
  
  
  
  
  
  
  
  
  
  
  // SOLUTIONS ARE BELOW THIS LINE!
  
  
  
  
  
  
  
  
  
  
  
  
  function getAverageSOLUTION() {
    const obj = {x: 3.6, y: 7.8, z: 4.3}
    const {x, y, z} = obj
    return Math.floor((x + y + z) / 3.0)
  }
  // log(getAverageSOLUTION())
  
  function getAvgTempSOLUTION() {
    const weather = {
      location: 'Toronto',
      unit: 'Celsius',
      today: {max: 2.6, min: -6.3},
      tomorrow: {max: 3.2, min: -5.8},
    }
    const {
      unit,
      today: {max: maxToday, min: minToday},
      tomorrow: {max: maxTomorrow, min: minTomorrow},
    } = weather
  
    return {
      max: (maxToday + maxTomorrow) / 2.0,
      min: (minToday + minTomorrow) / 2.0,
      unit: unit,
    }
  }
  // log(getAvgTempSOLUTION())
  
  function getFirstTwoSOLUTION() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7]
    const [first, second] = arr
  
    return {
      first: first,
      second: second,
    }
  }
  // log(getFirstTwoSOLUTION())
  
  function getElementsSOLUTION() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7]
    const [first, second,,, fifth] = arr
  
    return {
      first: first,
      second: second,
      fifth: fifth,
    }
  }
  // log(getElementsSOLUTION())
  
  function getSecondItemSOLUTION() {
    const food = [
      ['carrots', 'beans', 'peas', 'lettuce'],
      ['apple', 'mango', 'orange'],
      ['cookies', 'cake', 'pizza', 'chocolate'],
    ]
    const [[, firstItem], [, secondItem], [, thirdItem]] = food
  
    return {
      first: firstItem,
      second: secondItem,
      third: thirdItem,
    }
  }
  // log(getSecondItemSOLUTION())

  
  function defaultValuesSOLUTION() {
    const bench = {type: 'Piano', adjustable: false}
    const {legs: legCount = getDefaultLegCount()} = bench
    return legCount
  
    function getDefaultLegCount() {
      return 4
    }
  }
  // log(defaultValuesSOLUTION())
  
  function ontoAnObjectSOLUTION() {
    const array = [1, 2, 3, 4, 5, 6]
    const object = {}; // <-- one place a semicolon is required
    [object.one, object.two, object.three, ...object.rest] = array
    return object
  }
  // log(ontoAnObjectSOLUTION())