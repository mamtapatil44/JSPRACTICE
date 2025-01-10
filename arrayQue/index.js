// ways to empty an array 
// 1.setting length as zero
let arr =[1,2,3,4,5]
arr.length = 0;
console.log("arr" ,arr)

//2. using splice 
let arr1 =[1,2,3,4,5] 
arr1.splice(0,arr1.length)
console.log("arr1" ,arr1)

//3. reassigning empty array
let arr2 =[1,2,3,4,5] 
arr2 =[];