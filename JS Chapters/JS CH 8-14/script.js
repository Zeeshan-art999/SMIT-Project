document.getElementById("concatenateSomeStrings").onclick = function () {
    var message = "Good Day";
    var Name = "Zeeshan";
    var banger = "!";

    var fullName = message + " " + Name + banger
    alert(fullName)
}

document.getElementById("askNameFromUser").onclick = function () {
    var firstName = prompt("Please enter your name");
    alert(" Have a Good Day " + firstName)
    document.getElementById("output").innerHTML = "<p class='text-center'> Have a Good Day" + " " + firstName + "</p>"

    // var one = "2";
    // var two = 2;
    // if (one == two) {
    //     console.log("yes its true")
    // }
    //     document.getElementById("output").innerHTML = "<p class='text-center'>Yes its true</p>"
    // }
}

document.getElementById("comparisonOperators").onclick = function () {
    // var num1 = 20;
    // var num2 = 15;

    // if (num1 > num2) {
    //     alert("Yes, your condition is true")
    // }
    // document.getElementById("statment").innerHTML = "num1 = 20 " + " > " + "num2 = 15"
    // document.getElementById("output").innerHTML = "<p class='text-center'>Yes, your condition is true</p>"

    //Greater than or equal
    var num3 = 35;
    var num4 = 36;

    if (num3 >= num4) {
        alert('Yes, your condition is true. The 35 = 35 ')
    } else {
        alert('No, your contition is not true. The 35 >= 36')
    }

    document.getElementById("statment").innerHTML = "num1 = 35 " + " >= " + "num2 = 36"
    document.getElementById("output").innerHTML = "<p class='text-center'>No, your condition is not true</p>"
}

document.getElementById("ifElseif").onclick = function () {
    var num1 = prompt("Please enter num1 value for checking conditions.");
    var num2 = 15;

    if (num1 >= num2) {
        alert("Yes, your first condition is true")
    } else if (num1 == num2) {
        alert("Yes, your second condition is true")
    } else if (num1 <= num2) {
        alert("Yes, your third condition is true")
    } else {
        alert("Sorry, your condition is false")

    }
}

document.getElementById("testingSetsofConditions").onclick = function () {
    var age = prompt("Your age?");
    var weight = prompt("Your Weight?")

    if (age >= 18 && weight <= 65) {
        alert("You're a smart man.");
    } else if (age >= 18 && weight < 65) {
        alert("You're a fat man.");
    } else {
        alert("You're a babay")
    }
}

document.getElementById("ifStatmentsNested").onclick = function () {
    var age = prompt("Your age?");
    if(age>=18)
    var weight = prompt("Your Weight?")

    if (age >= 18 && weight <= 65) {
        alert("You're a smart man.");
    } else if (age >= 18 && weight < 65) {
        alert("You're a fat man.");
    } else {
        alert("You're  not a 18+.")
    }
}

document.getElementById("login").onclick = function () {
    var userName = prompt("Your user name");
    var pass = prompt("Your password");

    if (userName == "Zeeshan" && pass == "123") {
        alert("User logged in")
    } else {
        alert("Invalid password")
    }
}