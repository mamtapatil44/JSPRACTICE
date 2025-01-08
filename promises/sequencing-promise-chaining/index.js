
// You have three APIs: one provides user details, the second provides their orders, and the third provides order details. Fetch them in sequence, as each depends on the previous one.
// Hint: Chain .then() calls, ensuring each API's output is used for the next.


const userApiUrl = 'https://jsonplaceholder.typicode.com/users/1';
const ordersApiUrl = 'https://jsonplaceholder.typicode.com/users/1/orders';
const orderDetailsApiUrl = 'https://jsonplaceholder.typicode.com/orders/';


const fetchUser = () => {

    return fetch(userApiUrl).then((res) => {
        if (!res.ok) {
            throw new Error("Error....");

        }
        return res.json()
    })

}

const userOrders = (userId) => {
     console.log("userId" ,userId)
    return fetch(`${ordersApiUrl}?userId=${userId}`).then((res) => {
        console.log("resooo " ,res)
        if (!res.ok) {
            throw new Error("Error....");

        }
        console.log("res====",res)
        return res.json()
    })
}

const fetchOrderDtails = (OrderId) => {
    return fetch(`${orderDetailsApiUrl}${OrderId}`).then((res) => {
        if (!res.ok) {
            throw new Error("Error....");

        }
        return res.json()
    })
}

fetchUser().then((user)=>{
    console.log("user=== ",user)
    return userOrders(user?.id)
}).then((order)=>{
    console.log("order=== ",order)
    return fetchOrderDtails(order[0])
}).then((data)=>{
    console.log("data ",data)
}).catch((err)=>{
    console.log("err=== ",err)
})