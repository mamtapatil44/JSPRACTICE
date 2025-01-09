// Write your own implementation of Promise.all.
// Hint: Iterate over all Promises, track their states, and resolve once all are fulfilled or reject on the first failure.
// steps:
// 1. first i have to check arrument passed its array or not othrwise throw the error
// 2. To track all the completed promise and to take count of it ,thake completed variable and results array to store the results
// 3. check all promises array length and resolve accordingly
// 4. if promises array length >0 , iterate it using foreach loop and store the resllt of each promises at perticular index in results array
// 5. resolve ach array result in then block and increase the count of completed
// 6. then check promises length and completed count if both are equal then only resolve the result

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            return reject(new Error("Agruments should be array....."))
        }

        let completed = 0;
        let results = [];

        if (promises.length === 0) {
            return resolve([])
        }

        promises.forEach((promise, index) => {

            if (!promise instanceof Promise) {
                promise = Promise.resolve(promise)
            }


            promise.then(value => {
                results[index] = value;
                completed++;


                if (completed === promises.length) {
                    console.log("results=== ", results)
                    resolve(results)
                }
            })
                .catch(err => {
                    reject(err)
                })
        })

    })
}


const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));

myPromiseAll([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.error(error));