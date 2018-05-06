/**
 History of promises

    Blocking vs Non-Blocking
    Event Loop and concurrency in JavaScript
    Single Thread vs Multi Thread
    synchronous vs aysnchronous
    callbacks
    callback hell
    Promise Resolve, Reject
    Promise -- basic
    Promise.all
    Promise.race


    Useful Links:-
          https://github.com/sindresorhus/promise-fun


 */

//callback hell

request('http://www.somepage.com', function (firstError, firstResponse, firstBody) {
    if(firstError){
        // Handle error.
    }
    else {
        request(`http://www.somepage.com/${firstBody.someValue}`, function (secondError, secondResponse, secondBody) {
            if(secondError){
                // Handle error.
            }
            else {
              request(`http://www.somepage.com/${secondBody.someValue}`, function (thirdError, thirdResponse, thirdBody) {
                if(thirdError){
                    // Handle error.
                }
                else {
                    // Use thirdBody for something
                }
            });
            }
        });
    }
});



//Solution using promises

fetch('http://www.somepage.com')
.then((firstResponse) => {return fetch(`http://www.somepage.com/${firstResponse.someValue}`)})
.then((secondResponse) => {return fetch(`http://www.somepagelink.com/${secondResponse.someValue}`)})
.then((thirdResponse) => { console.log(thirdResponse)})
.catch((err) => { console.log(err)})