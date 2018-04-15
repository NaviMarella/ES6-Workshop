/*
Concepts:

- .then(successHandler)
- .then(success, error)
- .catch(error)
- Promise tree chaining
- state pending, resolved, rejected
- Promise.resolve
- Promise.reject
- Returning a promise in successhanndler
    - passing a promise to promise.resolve
- Returning anything in error
    - passing a promise to Promise.reject
- error in sucess handler
- no-error in error handler
- recovering from .catch

*/

var shouldFail = false;
var p = timeout(1000, shouldFail);

var p1 = p.then(res => {
  console.log(res)
}, err=> {console.log(err)});

var p2 = p1.then(res => {
  console.log(res)
}).catch(err => console.log(err));

p2.then(res => console.log(a.b.c.f)).catch(err => console.log(err))



// promise resolve samples

const p1 = Promise.resolve('hello')

p1.then(result => {
    console.log(result)
    return 'hi'
}).then(result => {
    console.log(result)
})



// return a promise from then chain

const p1 = Promise.resolve('hello')

p1.then(result => {
    console.log(result)
    // throw new Error('Error occured')
   return new Promise(resolve => {
       setTimeout(() => {
           resolve('Hi Guys')
       }, 500)
   })
}).then(result => {
    console.log(result)
})


// how to handle errors

p1.then(result => {
    console.log(result)
    throw new Error('Error occured') // Promise.reject('Error occured')
   return new Promise(resolve => {
       setTimeout(() => {
           resolve('Hi Guys')
       }, 500)
   })
}).then(result => {
    console.log(result)
}).catch(err => console.log(err))



//Creating a promise

// callback way

function getUser(data, callback){
    //make an ajax call and pass callback

    $.ajax('url', callback); // callback(err, userData);
}

function promiseGetUser(data){
    return new Promise((resolve, reject) => {
        getUser(data, (error, userData) => {
            if(error){
                reject(error)
            }
            else {
                resolve(userData)
            }
        })
    })
}

promiseGetUser({}).then( successHandler, errorHandler)










  function timeout(duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`rejected after ${duration}ms`)
        } else {
          resolve(`resolved after ${duration}ms`)
        }
      }, duration)
    })
  }