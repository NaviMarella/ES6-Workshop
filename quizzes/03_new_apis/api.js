
/*

Many new library additions, including core Math libraries, Array conversion helpers, String helpers, and Object.assign for copying.

Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1
[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })

*/

// Let's go through few concepts in the above

function stringIncludes() {
    // refactor to String.includes
    const phrase = `Let's learn javascript`;
    return phrase.includes('learn')  // Check for Case sensitive after refactoring
  }
  // console.log(stringIncludes())


  
function objectAssign() {
    // what will this return?
    const target = {
        a: '10 from target',
        b: {
            c: '30 from target'
        },
        d: '45 from target'
    }
   
    const object1 = {a: '20 from object1'}
    const object2 = {e: '56 from object2', b: { c: '120 from object2'}}
    Object.assign(target, object1, object2, object3)
    return target
  }
  // console.log(objectAssign()) --- How to clone an object, get the differences between mutable and immutable


  function getObjectValues(){
      const obj = {
          0: 'navi',
          1: 'tom',
          2: 'brad',   // Also this is a comma dangles
      }

      return Object.values(obj);
  }

  // console.log(getObjectValues());