// we have array , we have filterout even number and then multiply it by 2

let array = [1,2,3,4,5,6,7,8,9,10];
function filterAndMap(array,filterFn,mapFn){
    const filteredArray = array.filter(filterFn);
    const mappedArray = filteredArray.map(mapFn);
    return mappedArray;
}
function isOdd(number){
    return number % 2 !== 0;
}

function multiplyTwo(number){
    return number * 2;
}

const result = filterAndMap(array,isOdd,multiplyTwo);
console.log("result in callback=====> ",result)