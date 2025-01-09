// Simulate fetching data for 100 users from an API, but allow only 10 requests at a time.
// Hint: Use a queue mechanism with Promise.all() and batches :means we have use pagination here.
// 1.We can use a queue mechanism with Promise.all() and process the requests in batches.
// 2.Break the list of 100 requests into smaller batches, each containing a maximum of 10 requests.
// 3.Process each batch sequentially — that is, first wait for a batch of 10 requests to finish before starting the next batch
// 4.Use Promise.all()for each batch for 10 concurrent requests.
// 5.it will return all the concateddata at single time


function fetchUserData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`User data for user ${uId}`)
        }, 1000)
    })
}

function fetchUsersWithBatchingLimit(users, maxConcurrantLimit = 10) {
    let index = 0;

    const fetchNextBatch = () => {
        const batch = users.slice(index, index + maxConcurrantLimit);
        index += maxConcurrantLimit;
        return Promise.all(batch.map(fetchUserData))
    }

    const allBatchData = async () => {
        const results = [];
        // using while loop to iterate all the batches
        while (index < users.length) {
        const batchResult = await fetchNextBatch();
        results.push(...batchResult);
        }
        console.log("results in all== ", results)
        return results;
    }

    return allBatchData();

}

const users = Array.from({ length: 100 }, (currntValue, i) => i + 1); // i = 0 index and value whould be 1so

fetchUsersWithBatchingLimit(users,10)
.then(result=> console.log("combined result=== ",result))
.catch(err=>console.log("error= ",err))