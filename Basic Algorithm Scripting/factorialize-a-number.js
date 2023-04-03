function factorialize(num) {
  let Factorial = 1;
  for (let i=1; i<=num; i++){
    Factorial *= i;
  }
  return Factorial;
}

factorialize(5);