// synchronoums program which posses array of number and return array of sqaures of array elements while using loops and conditions

let squaredArray =[]
var squares =(numbers)=>{
    squaredArray = numbers.map((item)=>{return item * item});
    return squaredArray;
}
let numbers =[2,3,4,5,6];
const result = squares(numbers)
console.log("result=== ",result)