
// Simulate a batch processing system where each batch starts after a fixed delay.
// Hint: Combine setTimeout with a Promise wrapper.
// 1.here we use while loop and settimeout for delay
function processBatch(batchNumber){
    return new Promise((resolve)=>{
        resolve(`resolved batch ${batchNumber}`)
    })

}

function allBatchProcess(batches,delay){
let batchIndex =0;
const nextBatch = ()=>{
    return new Promise((resolve,reject)=>{
        const batchData = async()=>{
            while(batchIndex < batches.length){
                const currentbatch = batches[batchIndex++];
                console.log("current batch processed",currentbatch)
                await processBatch(currentbatch)
                await new Promise((resolve,reject)=>{
                    setTimeout(resolve,delay)
                 })
            }
            return "All batches processed!";
        }
 
        return batchData();
    })

}

return nextBatch();
}

allBatchProcess([1,2,3,4,5],1000).then((data)=>{
    console.log("batch result ",data)
}).catch((err)=>{
    console.log(err)
})