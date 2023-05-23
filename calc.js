let nextFunction;
let num1 = 0;
let operator;
let num2 = 0;

let isStepOne = true;
let isStepTwo = false;
let num2Entered = false;

const disCont = document.getElementById("display");
const display = document.createElement("div");
disCont.appendChild(display);

const numBtns = document.querySelectorAll(".digit");
const opsBtns = document.querySelectorAll(".ops");
const eval = document.querySelector("#equals");
const aClr = document.querySelector("#clear");

let opsArr = ["+", add, "-", subtract, "*", multiply, "/", divide];

function storeOps(input) {
    opsArr.forEach(() => {
        for (let i = 0; i < opsArr.length; i+=2) {
            if (input == opsArr[i]) {
                nextFunction = opsArr[i+1];
                operator = input;
                break;
            }
            else {

            }
        }
    })
}

//what happens when digits are clicked
numBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (isStepOne == true && isStepTwo == false) {
            num1 = parseInt((num1 + element.textContent), 10);
            display.textContent = num1;
        }
        else if (isStepOne == false && isStepTwo == true) {
            num2 = parseInt((num2 + element.textContent), 10);
            display.textContent = num1 + " " + operator + " " + num2;
            num2Entered = true;
        }
        else {
            console.log("uhoh");
        }
    })
})

//what happens when operators are clicked
opsBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (isStepOne == true && isStepTwo == false) {
            storeOps(element.textContent);
            display.textContent = num1 + " " + operator;
            isStepOne = false;
            isStepTwo = true;
        }
        else if (num2Entered == true) {
            num1 = nextFunction(num1, num2);
            num2 = 0;
            storeOps(element.textContent);
            display.textContent = num1 + " " + operator;
        }
        else {}
    })
})

//what happens when equals is clicked
eval.addEventListener("click", () => {
    if (isStepOne == false && isStepTwo == true && num2Entered == true) {
        display.textContent = nextFunction(num1, num2);
        reset();
    }
})

aClr.addEventListener("click", () => {
    reset();
    display.textContent = "";
})

function reset() {
    num1 = 0;
    num2 = 0;
    isStepOne = true;
    isStepTwo = false;
    isnum2Entered = false;
}

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
    if (y != 0) {
        let quotient = x / y;
        return quotient;
    }
    else {
        return "you can't do that";
    } 
}
