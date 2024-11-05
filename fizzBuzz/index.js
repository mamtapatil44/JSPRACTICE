let results = [];
const printFizzBuzz = (num) => {
  for (let n = 1; n < num; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push("FizzBuzz");
    } else if (n % 3 === 0) {
      results.push("Fizz");
    } else if (n % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(n);
    }
  }
};
printFizzBuzz(16);
console.log("results ====> ",results)