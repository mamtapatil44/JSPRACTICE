var names = [
  "Mike",
  "Matt",
  "Nancy",
  "Adam",
  "Jenny",
  "Nancy",
  "Carl",
  "Jenny",
];

const mappedArray = names.map((name) => {
  return {
    count: 1,
    name: name,
  };
});

console.log("mappedArray====", mappedArray);

const reduceArray = mappedArray.reduce((prev, current) => {
  // adds the count for each name. If the name doesn't exist in prev,
  // it starts at 0, and then current.count is added to it
  prev[current.name] = (prev[current.name] || 0) + current.count;
  return prev;
}, {});

console.log("reduceArray====", reduceArray);

const DuplicateArray = Object.keys(reduceArray).filter(
  (a) => reduceArray[a] > 1
);
console.log("DuplicateArray==== ", DuplicateArray);

const uniqueArray = Object.keys(reduceArray).filter(
  (name) => reduceArray[name] === 1
);
console.log("uniqueArray====", uniqueArray);

// Replace count > 1 with 1 in the reduceArray
const modifiedArray = Object.keys(reduceArray).reduce((prev, curr) => {
  prev[curr] = reduceArray[curr] > 1 ? 1 : reduceArray[curr];
  return prev;
}, {});

console.log("modifiedArray====", modifiedArray);
// Find unique names (names that were originally only 1)
const uniqueModifiedArray = Object.keys(modifiedArray).filter((name) => modifiedArray[name] === 1);
console.log("uniqueModifiedArray====", uniqueModifiedArray);




// 2nd approach to find unique array use set new method

const uniArray = new Set([...names])
console.log("uniArray=== ",uniArray)

