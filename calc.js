let nextFunction;
let num1 = 0;
let operator;
let num2 = 0;

let isStepOne = true;
let isStepTwo = false;
let isStepThree = false;

const numBtns = document.querySelectorAll(".digit");
const opsBtns = document.querySelectorAll(".ops");
const eval = document.querySelector("#equals");

let opsArr = ["+", add, "-", subtract, "*", multiply, "/", divide];

function storeOps(input) {
    opsArr.forEach(() => {
        for (let i = 0; i < opsArr.length; i+=2) {
            if (input == opsArr[i]) {
                nextFunction = opsArr[i+1];
                break;
            }
            else {

            }
        }
    })
}


numBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (isStepOne == true && isStepTwo == false) {
            num1 = parseInt((num1 + element.textContent), 10);
            console.log(num1);
        }
        else if (isStepOne == false && isStepTwo == true) {
            num2 = parseInt((num2 + element.textContent), 10);
            console.log(num2);
        }
        else {
            console.log("uhoh");
        }
    })
})

opsBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (isStepOne == true && isStepTwo == false) {
            storeOps(element.textContent);
            isStepOne = false;
            isStepTwo = true;
            /*console.log(nextFunction(2, 5));*/
        }
        else {
            console.log("yikes");
        }
    })
})

eval.addEventListener("click", () => {
    if (isStepOne == false && isStepTwo == true) {
        console.log(nextFunction(num1, num2));
    }
})

function add(x, y) {
	let sum = x + y;
    return sum;
};

function subtract(x, y) {
	let diff = x - y;
    return diff;
};

function multiply(x, y) {
    let product = x * y;
    return product;
};

function divide(x, y) {
    let quotient = x / y;
    return quotient;
}
