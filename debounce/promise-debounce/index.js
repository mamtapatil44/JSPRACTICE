function debouncePromise(promiseFn,delay){
    var timer;
    return function(){
        clearTimeout(timer)
        let contex =this;
        let args = arguments;

        return new Promise((resolve,reject)=>{
            timer= setTimeout(()=>{
                promiseFn.apply(contex,args)
                .then(resolve)
                .catch(reject)
            },delay)
        })
    }

}



function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data fetched")

        },1000)
    })
}

var debouncedFetchedData = debouncePromise(fetchData,500);

debouncedFetchedData().then((result)=>console.log("result ",result))
debouncedFetchedData().then((result)=>console.log("result2222 ",result))