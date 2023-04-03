function largestOfFour(arr) {
  let largetNumbersArr = [];
for (let i = 0; i < arr.length; i++) {
  let individualArr = arr[i];
  // console.log(individualArr)
  let individualHighestValue = -Infinity;
  for (let j = 0; j < individualArr.length; j++) {
    if (individualHighestValue < individualArr[j]) {
      individualHighestValue = individualArr[j];
    } 
  }
     largetNumbersArr.push(individualHighestValue);
}

  return largetNumbersArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));