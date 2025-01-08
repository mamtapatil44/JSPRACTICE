// Simulate a step-by-step online shopping process: selecting items, making payment, and confirming order.
// Hint: Use .then() chaining to execute each step sequentially.

// steps:select item ,calculate total price,make payment and confirmation details: depending promise(2nd operation depends on first and 3rd on 2nd),

const items = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Mouse", price: 50 },
    { id: 4, name: "Watch", price: 250 }]

const selectItems = () => {
    return new Promise((resolve, reject) => {
        console.log("selecting Items")
        setTimeout(() => {
            console.log("Items Selected", items);
            resolve(items)
        }, (1000));

    })
}

const makePayment = (items) => {
    return new Promise((resolve, reject) => {
        if (items) {
            console.log("making payment......")
            setTimeout(() => {
                const totalpayment = items.reduce((sum, item) => sum = item.price + sum, 0);
                console.log("total payment==== ", totalpayment);
                const isPaymentSuccess = true;
                if (isPaymentSuccess) {
                    resolve(totalpayment)
                }
                else {
                    reject("Payment failed.....")
                }
            }, 2000)
        }


    })
}

const confirmationOrder = (paymentAmt) => {

    return new Promise((resolve, reject) => {
        console.log("in confirmation.....")
        setTimeout(() => {
            console.log("Total amount paid:", paymentAmt)
            resolve("Your order confirmed and Shipped....")
        }, 3000)
    })
}


// use promise chaining
selectItems().then((items) => { return makePayment(items) })
    .then((totalPayment) => { return confirmationOrder(totalPayment) })
    .then((confirmationMsg) => { console.log(confirmationMsg) })
    .catch((err) => {
        console.log("err== ", err)
    })