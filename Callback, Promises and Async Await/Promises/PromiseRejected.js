const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        reject("Network Error")
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fullfilled", res);
})

promise.catch((err) => {
    console.log("Rejected", err);
})

