// Fetch data from an API with a maximum of 3 retry attempts if the initial request fails.
// Hint: Use a recursive function or a loop to retry the fetch and reject after exceeding attempts.
// here we can provide delay to improve ntwork conditions if any, otherwise it creates load on network and its optional


const fetchWithRetry =(url,retires =3 ,delay)=>{
    console.log("trying------")
       return fetch(url).then((res)=>{
            if(!res.ok){
            throw new Error("Network failed.....")
            }
            return res.json()
         }
            
        ).catch((err)=>{
            if(retires > 0){
              return new Promise((resolve,delay)=>setTimeout(resolve,delay)).
              then(()=>fetchWithRetry(url,retires-1,delay))
            }else{
                throw new Error("Maximum attempts failed");
                
            }
        })
    

}


fetchWithRetry('https://jsonplaceholder.typicode.com/users', 3, 1000)
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });