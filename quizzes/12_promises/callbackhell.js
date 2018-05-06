// callback way of making ajax calls

fetch('https://www.somepage.com', function (error, response, body) {
  if(error){
    // Handle error.
    console.log("Error occured" + error);
  }
  else {
    // Successful, do something with the result.
    console.log(response.json());
  }
});



// callback hell or pyramid of doom

//callback hell

/*********   Request1  ***********/
fetch('http://localhost:3000/olympic/2016/tennis/ranking/4', function (error, response, body) {

  if(error){
  	handleError(error);
  }else{
      if(response.statusCode != 200){
  	      handleError(response)
        }
      else{
        console.log("Response "+body)
      }
  }
});

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}


/************  Request 2  ***************/
var URL="http://localhost:3000";

fetch(URL+'/olympic/2016/tennis/ranking/4', function (error, response, body) {

  if(error){
  	handleError(error);
  }else{
      if(response.statusCode != 200){
  	      handleError(response);
        }
      else{
          console.log("Response 1 "+body);
         fetch(URL+'/iso/country/'+JSON.parse(body).Country,function(error,response,body){
            if(error){
            	handleError(error);
            }
            else{
            	if(response.statusCode != 200){
  	                 handleError(response)
                  }else{
                     console.log("Response 2 "+body)
                 }
            }
         })
      }
  }
});

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}

/************** Request 3 *********************/
var URL="http://localhost:3000";

fetch(URL+'/olympic/2016/tennis/ranking/4', function (error, response, body) {
  if(error){
  	handleError(error);
  }else{

      if(response.statusCode != 200){
  	      handleError(response);
        }
      else{
          console.log("Response 1 "+body);

         fetch(URL+'/iso/country/'+JSON.parse(body).Country,function(error,response,body){
            if(error){
            	handleError(error);
            }
            else{

            	if(response.statusCode != 200){
  	                 handleError(response)
                  }else{
                     console.log("Response 2 "+body);

                     fetch(URL+'/olympic/2016/medal/'+JSON.parse(body).iso,function(error,response,body){
                     	if(error){
            	         handleError(error);
                        }
                        else{
                        	if(response.statusCode != 200){
  	                          handleError(response);
                              }
                            else{
                              console.log("Response 3 "+body);
                              }
                           }
                     });
                 }
            }
         });
      }
    }
});

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}


//Solution:-   How do we solve callback hell

var URL="http://localhost:3000";

var getRanking=function get_rank(error,response,body){
   if(error || response.statusCode != 200){
  	    handleError(error);
     }
   else{
      console.log("Response 1 "+body);
      fetch(URL+'/iso/country/'+JSON.parse(body).Country,getISO);
    }
}

var getISO=function get_iso(error,response,body){
	if(error || response.statusCode != 200){
  	    handleError(error);
     }
    else{
       console.log("Response 2 "+body);
       fetch(URL+'/olympic/2016/medal/'+JSON.parse(body).iso,getMedalCount);
    }
}

var getMedalCount=function get_medal_count(error,response,body){
	if(error || response.statusCode != 200){
  	    handleError(error);
     }
    else{
      console.log("Response 3 "+body);
    }
}

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}

fetch(URL+'/olympic/2016/tennis/ranking/4', getRanking);