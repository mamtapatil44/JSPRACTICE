function debounceWIthAsync (asynFun,delay){
    var timer;

   
    return function(){
        clearTimeout(timer)
        var context =this;
        var args = arguments
        timer = setTimeout(()=>{
            asynFun.apply(context,...args)
        },delay)
    }

}
async function fetchData(){
    console.log("data fetched scuccessfully")
}

var debounceFetchedData = debounceWIthAsync(fetchData,500);
debounceFetchedData();



// ES6 example:
var debounce = (asyncFn,delay)=>{
    let timer;

    return async (...args)=>{
        clearTimeout(timer)
        await new Promise((resolve)=>{
            timer= setTimeout(resolve,delay)
        })
        await asyncFn.apply(...args)
    }
}

const processSyncData = (data)=>{
  console.log("processed data=== ",data)
}

const asyncProcessedData = debounce(processSyncData,500)
asyncProcessedData("ccccccc");