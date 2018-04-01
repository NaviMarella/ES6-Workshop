

//JavaScript Modules refer to a small units of independent, reusable code. 



// we'll be importing stuff from './app_module/module-a'

// 1. how could we import a module without doing
// anything with what we get back?

// 2. how could we import the default export?

// 3. how could we import `theAnswer` and
// `theQuestion` from './app_module/module-a'?

// 4. how could we import `theAnswer` and rename it
// to `fortyTwo`?

// 5. how could we import `add` (default) and
// `theQuestion` with a single import declaration?

// 6. how could we avoid the default alias when
// importing `add` and `theQuestion`?

// 7. how could we import everything onto a single
// object called `allTheThings`















// SOLUTIONS ARE BELOW THIS LINE!
// But they're commented out because JavaScript





console.log("ES6 Modules");




// 1.
// import './app_module/module-a'

// 2.
// import add from './app_module/module-a'

// 3.
// import {theAnswer} from './app_module/module-a'

// 4.
// import {theAnswer as fourtyTwo} from './app_module/module-a'

// 5.
// import {default as add, theQuestion} from './app_module/module-a'

// 6.
// import add, {theQuestion} from './app_module/module-a'

// 7.
// import * as allTheThings from './app_module/module-a'