// Fetch data for 1000 users from an API but throttle to make only 5 requests per second.
// Hint: Use a combination of setTimeout and Promises to throttle calls.


function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`user Data ${userId}`)
        }, 1000)
    })
}

function throttleUsersWithLimitPerSec(users, maxLimitPerSec) {
    index = 0;
    const results = [];
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const processbatch = async () => {
        const batchPromises = [];
        for (let i = 0; i < maxLimitPerSec && index < users.length; i++) {
            const userId = users[index++];
            batchPromises.push(fetchUserData(userId))
        }
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults)
        if (index < users.length) {
            await delay(1000);
            await processbatch()
        }

    }
  return processbatch().then(()=>results)

}



const users = Array.from({ length: 1000 }, (_, i) => i + 1); 

throttleUsersWithLimitPerSec(users,5).then((data)=>{
    console.log("all users  ",data.slice(0,12))
}).catch((err)=>{
    console.log(err)
})