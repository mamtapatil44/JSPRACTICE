// Fetch data from three APIs, but proceed even if one fails. Use fallback data for failed calls.
// Hint: Use Promise.allSettled() to handle both fulfilled and rejected promises.

const apiUserUrl1 = 'https://dummyjson.com/users/0';
const apiUserUrl2 = 'https://dummyjson.com/users/2';
const apiUserUrl3 = 'https://dummyjson.com/users/3';


const fetchUserData = (url) => {
    return fetch(url)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(`Failed to fetch data from ${url}`);
            }
            return resp.json()
        })

}
// here for apiUserUrl1 we get rejected Promise but still get result in Promise.allSettled() resp
Promise.allSettled([fetchUserData(apiUserUrl1), fetchUserData(apiUserUrl2), fetchUserData(apiUserUrl3)]).then((results) => {
    const [user1, user2, user3] = results;
    console.log('User 1 Data=== ', user1);
    console.log('User 2 Data=== ', user2);
    console.log('User 3 Data=== ', user3);
    }).catch((err) => {
        console.log("error ", err)
    })

    // Where promise gets rejected we can use fallback as result:
    const fallbackData = {
        id: null,
        name: 'MNP',
        email: 'user@gmail.com',
        age: '30'
    };


    Promise.allSettled([fetchUserData(apiUserUrl1), fetchUserData(apiUserUrl2), fetchUserData(apiUserUrl3)]).then((results) => {
        console.log("results ",results)
       const user1 = results[0].status === 'fulfilled' ? results[0].value :fallbackData;
       const user2 = results[1].status === 'fulfilled' ? results[1].value :fallbackData;
       const user3 = results[2].status === 'fulfilled' ? results[2].value :fallbackData;
       console.log("user1 ===== ",user1);
       console.log("user2 ===== ",user2)
       console.log("user3 ===== ",user3)
        }).catch((err) => {
            console.log("error ", err)
        })