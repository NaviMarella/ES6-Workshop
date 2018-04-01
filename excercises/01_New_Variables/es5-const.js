 /*
    Constants are block-scoped, much like variables defined using the let statement.
    The value of a constant cannot change through re-assignment, and it can't be redeclared.
*/

   const object1 = {};

    Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
    });

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

    Object.defineProperty(object1, "a", {
        value: 10,
        enumerable:   true,
        writable:     false,  // Main property which handles const behaviour
        configurable: false
    })

    const descriptor = Object.getOwnPropertyDescriptor(object1, 'a');
    //console.log(descriptor);

    /*
     Eslint rules for const and let which improves the developer efficiency
     https://eslint.org/docs/2.0.0/rules/prefer-const
    */ 