function bouncer(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
   let individualElements = arr[i]
    if(individualElements){    //we can get truthy values directly
      result.push(arr[i])
    }
  }
  
 
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));