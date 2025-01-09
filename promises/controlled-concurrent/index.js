// Fetch data for 50 users, allowing only 5 Promises to run concurrently.
// Hint: Use a concurrency control library or implement a custom queue.


function fetchUsers(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`User ${userId}`)
        }, 1000)
    })
}

function fetchConcuurentUsers(users, maxConcurrentLimit = 5) {
    let index = 0;

    const fetchNextBatch = () => {
        const batch = users.slice(index, index + maxConcurrentLimit);
        index += maxConcurrentLimit;
        return Promise.all(batch.map(fetchUsers))
    }

    const allUsers = async () => {
        let results = [];
        while (index < users.length) {
            const batchResult = await fetchNextBatch()

            results.push(...batchResult)
        }
        return results
    }

    return allUsers();
}

let users = Array.from({length:50},(currentValue,index)=>index+1);

fetchConcuurentUsers(users,5).then((res)=>console.log("all users === ",res))
.catch((err)=>{
    console.log("err=== ",err)
})