const employee = {
    calcTax () {
        console.log("Tax rate is 10%");        
    },
};

const rudra = {
    salary : 500000,
    calcTax () {
        console.log("Tax rate is 20%");
    }
};

rudra.__proto__ = employee;
rudra.calcTax;