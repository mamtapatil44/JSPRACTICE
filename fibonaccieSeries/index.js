function fSeries(n) {
 let fib = [0,1]

  for (let i = 2; i < n; i++) {
    // next number should be sum of previous two, here fib[i] 
    // should be next num and fib[i-1] and fib[i-2] are previous numbers
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib
}

const result = fSeries(10)
console.log("result series == > " ,result)
