    var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my HomeLand."


function lowerCase() {
    // var originalText="Zeeshan Sarfraz";
    // var originalText = document.getElementById("inputText").value;
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    // showOutput(lowerCaseText)
}

function upperCase() {
    // var originalText = document.getElementById("inputText").value;
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
    // let originalText = document.getElementById("inputText").value;
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
