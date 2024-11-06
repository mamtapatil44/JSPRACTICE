
const sumandProduct = (...args)=>{
    const sum = args.reduce((acc,curr)=>acc = acc + curr ,0);
    const product = args.reduce((acc,curr)=>acc = acc * curr ,1);
     return { sum, product}
}

const result = sumandProduct(5,4);
console.log("result== ",result)