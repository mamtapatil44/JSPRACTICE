// Problem Statement: You need to fetch user details from three different APIs. 
// Combine the results and display them together.
// Hint: Use Promise.all() to make the calls concurrently and aggregate the results.


const apiUserUrl1 = 'https://dummyjson.com/users/1';
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

Promise.all([fetchUserData(apiUserUrl1), fetchUserData(apiUserUrl2), fetchUserData(apiUserUrl3)]).then((results) => {
    const [user1, user2, user3] = results;
    console.log('User 1 Data=== ', user1);
    console.log('User 2 Data=== ', user2);
    console.log('User 3 Data=== ', user3);
    }).catch((err) => {
        console.log("error ", err)
    })

