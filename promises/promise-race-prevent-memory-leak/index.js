// Fake api used :'https://jsonplaceholder.typicode.com/users'

const fetchWithTimeout = (url, timeout = 5000) => {
    const fetchPr =
        fetch(url).then((res) => {
            if (!res.ok) {
                throw new error("Failed....")
            }
            return res.json()
        })


    const timoutPr = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timeout..."))
        }, timeout)
    })

    return Promise.race([fetchPr, timoutPr])

}
fetchWithTimeout('https://jsonplaceholder.typicode.com/users').then((res) => {
    console.log("data fetched::::: ", res)
}).catch((err) => {
    console.log("err== ", err)
})