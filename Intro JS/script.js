function sumTwoNumbers() {

    // take input from user
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");

    // convert string to number
    num1 = Number(num1);
    num2 = Number(num2);

    // calculate sum
    let sum = num1 + num2;

    // show original statement
    document.getElementById("input-box").innerText =
        "The sum of " + num1 + " and " + num2 + " is:";

    // show output
    document.getElementById("output-box").innerText = sum;
}