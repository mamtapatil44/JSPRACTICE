// 1. to find out length we generally use length built in property of array
// but it will gives error when undfined and empty values are present in array
// 2.we can use Oject.key() and filter method

const arrayLength = (arr)=>{
    return Object.keys(arr).filter((key)=>{
        return key >=0  && key % 1 === 0;
    }).length
}
const myArray = [10, 20, 30, undefined,60];
console.log("lenth",arrayLength(myArray)); 

// iterations:
function getArrayLength(arr){
    let count =0;
    for (let i=0 ;i<arr.length;i++){
        count++
    }
    return count
}
const l = getArrayLength([1,4,"g",6,7])
console.log("iteration length",l)


// reduce function
function reduceArraylength(arr){
 return arr.reduce((acc,curr)=> acc + 1,0)
}
const le = reduceArraylength([1,4,6,7])
console.log("reduce arr length",le)