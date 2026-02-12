function round() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert("Please enter a floating point number")
    }

    let roundTheNumber = Math.round(number);
    let html = "<h1 style='text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html
}

function ceil() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert("Please enter a floating point number")
    }

    let roundTheNumber = Math.ceil(number);
    let html = "<h1 style='text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html
}

function floor() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert("Please enter a floating point number")
    }

    let roundTheNumber = Math.floor(number);
    let html = "<h1 style='text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html
}

function randomNumber() {
    let randomNumber = Math.random();

    let html = "<h1 style='text-primarytheme mb-0'>" + randomNumber + "</h1>"
    document.getElementById("output").innerHTML = html
}

function dice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;

    let dice = Math.floor(randomNumber);
    let html = '<h1 style="text-primarytheme mb-0">' + dice + '</h1><span>Generating a random number from 1 to 6 <span>'
    document.getElementById("output").innerHTML = html
}

function randomString() {
    // let length = inputValue()
    let length = 8;

    if (!length) {
        alert("Please enter length")
        return;
    }

    let randomString = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "`~!#$%^&*+-_=;.,/?";
    let possibleSting = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;

    for (let i = 0; i < length; i++) {

        let randomNumber = Math.random();
        randomString += possibleSting.charAt(Math.floor(randomNumber * possibleSting.length));
    }
    let html = '<h6 class="text-primarytheme mb-0">' + randomString + '</h6>' + '<p>Generating random string &amp; the length is: <span style="color:red; font-size:18px;">' + length + '</span></p>';
    document.getElementById("output").innerHTML = html;
}

function controllingsStings() {
    // let num = inputValue()
    let num = document.getElementById("inputText").value

    if (!num) {
        alert("Please enter some number")
    }

    // let num = "251.1245"

    console.log(num);
    console.log(typeof num)

    // num = parseInt(num);
    // num = parseFloat(num);
    // num = Number(num);
    // num = num.tofixed(2)    //ya dubara string ma kar deta ha or hum phly isko num ma chg karain ga nai tu website crash ho jaigi
    console.log(typeof num);
    console.log(num)
}

function controllingsLength() {
    // let num = inputValue()

    // if(!num){
    //     alert("Please enter some number")
    // }

    let num = "251.1245"
    num = Number(num);
    console.log(typeof num)

    num = num.tofixed(2)
    num = Number(num);
    console.log(typeof num);
    console.log(num)
}

function calculateGST() {
    let cost = document.getElementById("inputText").value;

    if (!cost) {
        alert("Please enter your Bill")
        return;
    }

    // let cost = "912";

    cost = Number(cost);
    let taxInput = +prompt("Enter your tax")
    // let tax = 17 / 100

    let tax = cost * (17 / 100);
    totalCost = cost + tax;
    totalCost = Math.round(totalCost)

    document.getElementById("output").innerHTML = 'Your bill = <span class="text-primaryTheme fw-bold fw-18">' + cost + '</span>';
    document.getElementById("output").innerHTML += '<br>Tax ' + taxInput + '% =<span class="text-danger fw-bold fw-18">' + tax.toFixed(2) + '</span>';
    document.getElementById("output").innerHTML += '<br>Total amount including tax = <span class="text-success fw-bold fw-18">' + totalCost + '</span>';

}