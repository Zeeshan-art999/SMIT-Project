function lowerCase() {
    // var originalText="Zeeshan Sarfraz";
    var originalText = document.getElementById("inputText").value;
    if (originalText === "") {
        alert("Please enter your text  first")
        return;
    }
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
    var originalText = document.getElementById("originalText").innerText;
    let capitalizeText = '<span style=""text-transform:capitalize;">' + originalText + '</span>';
    document.getElementById("output").innerHTML = capitalizeText;
    // showOutput(capitalizeText)
}

function betterFormatting() {
    // let text=inputValue();
    let text = document.getElementById("inputText").value;
    text = text.toLowerCase();
    if (text === "") {
        alert("Please enter your text  first")
        return;
    }
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