/*
    Reference :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

    An arrow function expression has a shorter syntax than a function expression and does not have its own
    this, arguments, super, or new.target.
    These function expressions are best suited for non-method functions, and they cannot be used as constructors. 
    
    (param1, param2, …, paramN) => { statements } 
    (param1, param2, …, paramN) => expression
    // equivalent to: => { return expression; } 

    // Parentheses are optional when there's only one parameter name:
    (singleParam) => { statements }
    singleParam => { statements }

    // The parameter list for a function with no parameters should be written with a pair of parentheses.
    () => { statements }

*/

function multiArgument() {
    // refactor to an arrow function
    const divide = a =>  { return a *2 }
    return divide(40, 10)
  }
  // console.log(multiArgument())
  
  function noArgument() {
    // refactor to an arrow function
    const getFive = () => 5
    return getFive()
  }
  // console.log(noArgument())
  
  function singleArgument() {
    // refactor to an arrow function
    const identity = i => i;
    return identity(350)
  }
  // console.log(singleArgument())
  
  function spreadWithArrow() {
    // refactor to an arrow function
    const asArray = (...args) => args
    return asArray(1, 2, 3, 4)
  }
  // console.log(spreadWithArrow())
  
  function withObject() {
    // refactor to an arrow function
    const getObject = (favoriteCandy) => ({ a: 10})
    return getObject('twix')
  }
  // console.log(withObject())
  
  function withMultiLineExpression() {
    const getString = (name)  => (
        `
          Hello there ${name}
          How are you doing today?
        `
      )
    return getString('Ryan')
  }
  // console.log(withMultiLineExpression())
  
  function curryAdd() {
    // refactor to a arrow functions
    return curryAddition(9)(3)(5)

    curryAddition = a => b => c => a+b+c
  }
  // console.log(curryAdd())
  
  function context() {
    const population = {
      unit: 'Million',
      data: [
        {city: 'Tokyo', value: 37.833},
        {city: 'Sanghai', value: 22.991},
        {city: 'New Delhi', value: 24.953},
      ],
      display() {
        // TODO: refactor with arrow function
        return this.data.map(function populationStringMapper(element) {
          return `Population in ${element.city} is ${element.value} ${this.unit}`
        }, this) // passing `this` as second argument to bind properly
      },
    }
    return population.display()
  }
  // console.log(context())


  function getSum(){ 
    var x = 10;
    this // function scope
     setTimeout( () => {
        console.log(self.x)
     }, 100)
  }
  
  function noBind() {
    // what will this function return?
    const user = {
      id: 42,
      getIdGetter() {
        return () => this.id
      },
    }
    const idGetter = user.getIdGetter()
    const idGetter24 = idGetter.bind({id: 24})
    return idGetter24()
  }
  // console.log(noBind())
  
  
  
  
  
  
  
  
  
  
  
  
  // SOLUTIONS ARE BELOW THIS LINE!
  
  
  
  
  
  
  
  
  
  
  
  
  function multiArgumentSOLUTION() {
    const divide = (a, b) => a / b
    return divide(40, 10)
  }
  // console.log(multiArgumentSOLUTION())
  
  function noArgumentSOLUTION() {
    const getFive = () => 5
    return getFive()
  }
  // log(noArgumentSOLUTION())
  
  function singleArgumentSOLUTION() {
    const identity = i => i
    return identity(350)
  }
  // log(singleArgumentSOLUTION())
  
  function spreadWithArrowSOLUTION() {
    // refactor to an arrow function
    const asArray = (...args) => args
    return asArray(1, 2, 3, 4)
  }
  // log(spreadWithArrowSOLUTION())
  
  function withObjectSOLUTION() {
    // refactor to an arrow function
    const getObject = favoriteCandy => ({favoriteCandy})
    return getObject('twix')
  }
  // log(withObjectSOLUTION())
  
  function withMultiLineExpressionSOLUTION() {
    const getString = name => (
      `
        Hello there ${name}
        How are you doing today?
      `
    )
    return getString('Ryan')
  }
  // log(withMultiLineExpressionSOLUTION())
  
  function curryAddSOLUTION() {
    const curryAddition = a => b => c => a + b + c
    return curryAddition(9)(3)(5)
  }
  // log(curryAddSOLUTION())
  
  function contextSOLUTION() {
    const population = {
      unit: 'Million',
      data: [
        {city: 'Tokyo', value: 37.833},
        {city: 'Sanghai', value: 22.991},
        {city: 'New Delhi', value: 24.953},
      ],
      display() {
        return this.data.map(element => (
          `Population in ${element.city} is ${element.value} ${this.unit}`
        ))
      },
    }
    return population.display()
  }
  // log(contextSOLUTION())
  