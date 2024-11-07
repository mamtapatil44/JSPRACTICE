function maxAndMinValue(input){
    const numbers = input.split(" ").map((num)=>parseFloat(num))
    console.log("numbers",numbers)
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return {max,min}

}

const num = maxAndMinValue("5 6 8 9");
console.log("max and min from string ",num)