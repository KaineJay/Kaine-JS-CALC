//program to create a simple calculator using JavaScript
const operator = prompt ("Enter the operator you want (+, -, / or *)")

const Number1 = parseFloat(prompt ("Enter the 1st Number"));
const Number2 = parseFloat(prompt ("Enter the 2nd Number"));

let result;

// use if, elseif and else keyword to define the calculator condition.
if (operator == '+') {result = Number1 + Number2;
}
else if (operator == '-') {result = Number1 - Number2;
}
else if (operator == '/') {result = Number1 / Number2;
}
else {
    result = Number1 * Number2; 
}

// display the result
alert("The Result is: " + result);