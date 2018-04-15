function spreadFunctionCall() {
    // TODO: return the maximum value in an array of integers
    // use spread operator and Math.max() in refactoring
    const arr = [5, 6, 8, 4, 9]
    return Math.max.apply(null, arr)
  }
  // console.log(spreadFunctionCall())
  
  function concatArrays() {
    // TODO: flatten nested arrays of arbitrary levels of nesting
    // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
    // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
    // use spread operator in place of Array.prototype.concat()

    var a = [10,20,30,40]
    var b = [35,45,65]

    var result = [ ...a, ...b]


    const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
    return flatter(arr)
  
    function flatter(arg) {
      return arg.reduce((acc, item) => {
        if (Array.isArray(item)) {
          return acc.concat(flatter(item))
        }
        return acc.concat([item])
      }, [])
    }
  }
  // console.log(concatArrays())
  
  function mergeObjects() {
    // refactor to object spread
    const obj1 = {
      a: 'a from obj1',
      b: 'b from obj1',
      c: 'c from obj1',
      d: {
        e: 'e from obj1',
        f: 'f from obj1',
      },
    }
    const obj2 = {
      b: 'b from obj2',
      c: 'c from obj2',
      d: {
        g: 'g from obj2',
        h: 'g from obj2',
      },
    }
    return Object.assign({}, obj1, obj2)
  }
  // console.log(mergeObjects())

  var x = {a : 10}
  var b = { a: 20, c: 30, z: { w: 30} } 

  Object.assign({},{
    a: 20, c: 30, z: { w: 30},
    z: {
      w: 45
    }
  } )
  
  function spreadString() {
    return join('--', 'PayPal')
  
    function join(delimiter, string) {
      return [...string].join(delimiter)
    }
  }
  // console.log(spreadString())
  
  function restString() {
    // what does this return?
    const greeting = 'Hello world'
    const [h, e, l, l2, o, space, ...splitGreeting] = greeting
    return splitGreeting
  }
  // console.log(restString())


/*
    // Before rest parameters, the following could be found:
  function f(a, b) {
    var args = Array.prototype.slice.call(arguments, f.length);

    // …
  }

  // to be equivalent of

  function f(a, b, ...args) {
    
  }
  */

  function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }

  // console.log(sum(1,2))
  // console.log(sum(1,2,3,4))

  function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
      return multiplier * element;
    });
  }

 //console.log(multiply(2, 1, 2, 3));
  

 function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // what is the output?? Hint undefined + something = undefined
f(1, 2, 3)    // what is the output??
f(1, 2, 3, 4) // what is the output?? (the fourth parameter is not destructured)
  
  
  
  
  
  
  
  
  
  // SOLUTIONS ARE GIVEN BELOW
  // No peeking!
  
  
  
  
  
  
  
  
  
  
  
  
  
  function spreadFunctionCallSOLUTION() {
    const arr = [5, 6, 8, 4, 9]
    return Math.max(...arr)
  }
  // log(spreadFunctionCallSOLUTION())
  
  function concatArraysSOLUTION() {
    const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
    return flatter(arr)
  
    function flatter(arg) {
      return arg.reduce((acc, item) => {
        return Array.isArray(item) ? [...acc, ...flatter(item)] : [...acc, item]
      }, [])
    }
  }
  // log(concatArraysSOLUTION())
  
  function mergeObjectsSOLUTION() {
    const obj1 = {
      a: 'a from obj1',
      b: 'b from obj1',
      c: 'c from obj1',
      d: {
        e: 'e from obj1',
        f: 'f from obj1',
      },
    }
    const obj2 = {
      b: 'b from obj2',
      c: 'c from obj2',
      d: {
        g: 'g from obj2',
        h: 'g from obj2',
      },
    }
    return {
      ...obj1,
      ...obj2,
    }
  }




  function sum(...props){
    // using arguments
  }