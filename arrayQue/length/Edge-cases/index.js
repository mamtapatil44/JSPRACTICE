// 1. if array is empty then its length === 0, so we have to handle this in if conditions
const myArray =[];
if(myArray.length === 0){
    console.log("array is empty")
}else{
    console.log("Handle non-empty condition")
}

// 2.Spars array :array which contains undefined and empty values
const myarray = [1,,3,,5]
const myarrayLength =myarray.length;
console.log("myarrayLength " ,myarrayLength);
let count = 0;
for (let i=0; i <myarrayLength ;i++){
    if(myarray[i] !== undefined){
        count++
    }
}

console.log("array count== ",count)