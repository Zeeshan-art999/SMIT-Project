document.getElementById("clearInput").onclick=function(){
    document.getElementById("inputText").value="";
}

document.getElementById("clearOutput").onclick=function(){
    document.getElementById("output").innerHTML="";
}


var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my HomeLand."

function lowerCase() {
    // var originalText="Zeeshan Sarfraz";
    var originalText = document.getElementById("inputText").value;
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    // showOutput(lowerCaseText)
}

function upperCase() {
    var originalText = document.getElementById("inputText").value;
    let lowerCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    // showOutput(upperCaseText)
}

function capitalize() {
    let capitalizeText = '<span style="text-transform:capitalize">"' + originalText + '"</span>'
    document.getElementById("output").innerHTML = capitalizeText;
}

function betterFormatting() {
    // let text=inputValue();
    let originalText = document.getElementById("inputText").value;
    text = originalText.toLowerCase();
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text;
    // showOutput(Text)
}

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

function printAllCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>';
    }
}

document.getElementById("addCity").onclick = function () {
    let city = document.getElementById("inputText").value;
    if (!city) {
        alert("Please Enter Your City First")
        return;
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    // let cityFound = false;

    let isCityFound = cities.includes(cityWordInCapitalize)

    if (!isCityFound) {
        cities.push(cityWordInCapitalize);
        let html = '<span style="color:green;font-size:20px">"' + cityWordInCapitalize + '"</span> has been successfully added into a list.'
        document.getElementById("output").innerHTML = html
    } else {
        let html = '<span style="color:red;font-size:20px">"' + cityWordInCapitalize + '"</span> is already in list.';
        document.getElementById("output").innerHTML = html
    }
}


function checkCityInList() {
    let city = document.getElementById("inputText").value;
    if (!city) {
        alert("Please Enter Your City First")
        return;
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    // let cityFound = false;

    let isCityFound = cities.includes(cityWordInCapitalize)

    if (!isCityFound) {
        // cities.push(cityWordInCapitalize);
        let html = '<span style="color:green;font-size:20px">"' + cityWordInCapitalize + '"</span> has been successfully added into a list.'
        document.getElementById("output").innerHTML = html
    } else {
        let html = '<span style="color:green;font-size:20px">"' + cityWordInCapitalize + '"</span> found in the list.';
        document.getElementById("output").innerHTML = html
    }
}

function findWord() {
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if (!word) {
        alert("Please type a word for find.");
        return;
    }
    word = word.toLowerCase();
    let findWord = newOriginalText.indexOf(word);
    // let findWord = newOriginalText.lastIndexOf(word);

    if (findWord !== -1) {
        let html = 'Your word <span style="color:green;font-size: 18px">"' + word + '"</span> found at index:' + findWord;
        document.getElementById("output").innerHTML = html
    } else {
        let html = 'Your word <span style="color:red;font-size: 18px">"' + word + '"</span> does not exist in the Original String';
        document.getElementById("output").innerHTML = html
    }
}

function replaceWord() {
    // let cinic = "33102-270194-45"
    // if(cinic.includes("-") || cinic.includes(" ") || cinic.includes(".") ){
    //     alert("please enter yout cinic without dashes dot or spaces .")
    //     return;
    // }
    // let word = "-";
    // let replaceWith = "";
    // word = new RegExp(word,'g');
    // let cinicWithoutDashs = cinic.replaceAll(word,"");
    // console.log(cinicWithoutDashs)

    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if (!word) {
        alert("Please type a word for replacing.");
        return;
    }

    let replaceWith = prompt("Enter a word that you want to replace with");
    if (!replaceWith) {
        alert('Please type a word to replace it with' + word + ".")
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, 'g');
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}