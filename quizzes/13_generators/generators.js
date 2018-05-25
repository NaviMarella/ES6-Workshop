//Generators are functions that can be paused and resumed

// Can loop result set as iterators.


function* generator () {
    yield 'p'
    console.log('o')
    yield 'n'
    console.log('y')
    yield 'f'
    console.log('o')
    yield 'o'
    console.log('!')
  }

  var g = generator()
  while (true) {
    let item = g.next()
    if (item.done) {
      break
    }
    console.log(item.value)
  }

  //Convert the previous callback example to generators
 //convert to async await
  function *getUsers(){
    var URL="http://localhost:3000";
    var country = yield fetch(url+'/olympic/2016/tennis/ranking/4');
    var countryData = yield fetch(URL+'/iso/country/'+ country);
    var medals = yield fetch(URL+'/olympic/2016/medal/'+ countryData.iso);

    return medals;
  }