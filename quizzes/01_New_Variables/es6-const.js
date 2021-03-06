
    /*
        Constants are block-scoped, much like variables defined using the let statement.
        The value of a constant cannot change through re-assignment, and it can't be redeclared.
    */

    // Variables in Const

    const MyObj = "OldValue";
    MyObj = "NewValue";  // Throws an exception as const varaiable can't be changed.

    (function logNumber(){
        const number = 42;
        try {
            number = 99;
            } catch(err) {
            console.log(err);
            // expected output: TypeError: invalid assignment to const `number'
            // Note - error messages will vary depending on browser
        }
        console.log(number);
    })()

    // Objects using Const
    const obj = {
        a: 10
    }

    obj = {}; // This will through an error as object reference can't be immutable

    obj.a = 20; // Object keys are not protected

    // Arrays using Const -- same applies to arrays as Objects

    const myArray = [];
    myArray.push('10'); // This is valid and 10 will be pushed into array.
    myArray = [20,30]; // Assigning a new array throws an error.