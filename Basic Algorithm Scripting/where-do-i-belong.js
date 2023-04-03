function getIndexToIns(arr, num) {
  let oderdArr = arr.sort(function(a, b){return a - b});

  for(let i = 0; i <  oderdArr.length; i++) {
    if ( num > arr[i-1] && num  <= arr[i]) {
      return i;
    }
  }

  if (oderdArr[oderdArr.length-1] < num) {
    return oderdArr.length;
  }

  return 0;
}

console.log(getIndexToIns([3, 10, 5], 3));