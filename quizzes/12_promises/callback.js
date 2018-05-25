// callback samples

//A callback is a function that is passed into another function as an argument to be executed later.

var users = ['Naveen', 'Brad', 'Sam'];

function addUser(username){
  setTimeout(() => {
    users.push(username);
  }, 200)
}

function getUsers(){
  setTimeout(() => {
    console.log(users);
  }, 100)
}

// First add user to the database
addUser('Jim')

//Problem: By the time we getUsers is called 'Jim' is not added to the users list
//Solution: pass getUsers as a callback toaddUser function
//Second get updated list of users
getUsers()








/********  Callback solution to the above problem *******/

var users = ['Naveen', 'Brad', 'Sam'];

function addUser(username, callbackFn){
  setTimeout(() => {
    users.push(username);
    // once the above operation is successful, we will call callback with the updated data
    callbackFn(users)
  }, 200)
}

function getUsers(users){
  setTimeout(() => {
    console.log(users);
  }, 100)
}

// First add user to the database
addUser('Jim', getUsers)



// More examples of real time usage of callbacks

//1. Event handles as callbacks
const button = document.querySelector('button')
button.addEventListener('click', function(e) {
  // Adds clicked class to button
  this.classList.add('clicked')
})

/******** OR   ******/

const button = document.querySelector('button')
// Function that adds 'clicked' class to the element
function clicked (e) {
  this.classList.add('clicked')
}
// Adds click function as a callback to the event listener
button.addEventListener('click', clicked)

// 2. map,filter,reduce accepts callbacks

var sqaure = (num) => num * 2;

var result = [1,2,3,4].map(sqaure)



/****** Callbacks in asyncronous functions ******/

//Asynchronous here means that, if JavaScript needs to wait for something to complete, it will execute the rest of the tasks given to it while waiting.

console.log("before set timeout"+ Date.now());
var callback = function() {
    alert('Hello World!');
}
setTimeout(callback, 500);

console.log("After set timeout"+ Date.now());

// ajax calls

// Callbacks in jQuery's ajax method
$.ajax('some-url', {
    success (data) { /* success callback */ },
    error (err) { /* error callback */}
  });

  // Fetch api to make ajax calls

fetch('url').then(function() { /* handle response */ });