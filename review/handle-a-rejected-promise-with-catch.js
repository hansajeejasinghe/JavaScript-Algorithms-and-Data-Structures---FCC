const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
  makeServerRequest.catch(error => {
  lonsole.log(result);
});
});

makeServerRequest.then(result => {
  console.log(error);
});

//catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.

//error is the argument passed in to the reject method.