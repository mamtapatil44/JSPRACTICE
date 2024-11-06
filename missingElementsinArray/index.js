var findMissingElements = (arr) => {
  arr = arr.sort((a, b) => a - b);

  const missingArray = [];
  const max = arr[arr.length - 1];
  console.log("max== ",max)
  if (arr[0] !== 1) {
    missingArray.unshift(1);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const gap = arr[i + 1] - arr[i];
    if (gap > 1) {
      // Add all missing numbers in the gap
      for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
        missingArray.push(j);
      }
    }
  }

   for (let i = arr[arr.length - 1] + 1; i <= max; i++) {
    missingArray.push(i);
  }
  console.log("missing array",missingArray)
  return missingArray;
}

const firstArry = [1, 3, 5, 8];
const secondArray = [2, 4,7];
const thirdArray = [6,7];
console.log("outtput for 3=== ", findMissingElements(thirdArray));
console.log("outtput for 1=== ", findMissingElements(firstArry));
console.log("outtput for 2=== ", findMissingElements(secondArray));

