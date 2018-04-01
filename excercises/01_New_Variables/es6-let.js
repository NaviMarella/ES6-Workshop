/*
let is used to define a variable and it's scope is limited to block scope. ex:- if, else, for, switch

let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
*/
function getX(){
    let x = 1;

    if (x === 1) {
    let x = 2;

    console.log(x);
    }
    console.log(x);
}

getX();

//More examples  --- Variable Hoisting is JavaScript's default behavior of moving declarations to the top.

function setHeight(){
  console.log("Outside block --- height is "+ height);
  if(true){
    var height = 100;
    console.log("Inside block --- height is "+ height);
  }
}
// Pitfalls in let --- Temporal Dead Zone and errors with let

if (x) {
    let foo;
    let foo; // SyntaxError thrown.
}

// No Variable hoisting using let
function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
}
