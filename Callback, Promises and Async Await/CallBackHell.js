//write a code that we get data after 2 sec later.
//NOTE:--> First we got DATA1 and next after 2 sec we got DATA2 and next after 2 sec we got DATA3. Like this

function getData(dataId, getNextData) {
    setTimeout( () => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData(); //getData() call
        }
    }, 2000); //after 2 sec
}

getData(1, () => {
    getData(2, () => {
        getData(3)
    }); //Parameter passing like this
});
