// Pure function ex : Gives the same o/p for same i/p, doesnt have side effects

function sum(a, b) {
  return a + b;
}
const res1 = sum(3, 5); // o/p:8
const res2 = sum(3, 5); // 0/p:8 ,same o/p for same i/p
console.log("res1===> ", res1);
console.log("res2===> ", res2);

// Impure function :gives diff o/p for same i/p and have side effect

let counter = 0;
function increment() {
  counter++;
  return counter;
}

const res3 = increment(); // op: 1
const res4 = increment(); //op: 2 :: diff o/p for same fun with same i/p
console.log("res3===> ", res3);
console.log("res4===> ", res4);
