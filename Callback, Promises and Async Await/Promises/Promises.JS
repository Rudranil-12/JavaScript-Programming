let promise = new Promise ((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("Some error") //After running this it will be showing automatically error but there is no error in code.
})
console.log(promise);
