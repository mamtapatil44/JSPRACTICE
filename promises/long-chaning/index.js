// Create a chain of Promises that performs 10 steps sequentially. Ensure each step resolves in at least 1 second.
// Hint: Use setTimeout inside each .then() step.
// 1. write fun which takes step num and return promise resolving perticular step
// 2.use then performing promise chaining with same fun

function steps(stepN){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`performing step: ${stepN} completed` )
          resolve()
        },1000)
    })
}

steps(1).then(()=>steps(2))
.then(()=>steps(3))
.then(()=>steps(4))
.then(()=>steps(5))
.then(()=>steps(6))
.then(()=>steps(7))
.then(()=>steps(8))
.then(()=>steps(9))
.then(()=>steps(10))
.then(()=>console.log("All 10 steps completed"))
.catch((err)=>console.log("err",err))