function lowerCase() {
    var originalText="Zeeshan Sarfraz";
    var originalText = document.getElementById("inputText").value;
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    // showOutput(lowerCaseText)
}

function upperCase() {
    // var originalText="Zeeshan Sarfraz";
    var originalText = document.getElementById("inputText").value;
    let lowerCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    // showOutput(upperCaseText)
}

function capitalize() {
    let capitalizeText = '<span style=""text-transform:capitalize;">' + originalText + '</span>';
    document.getElementById("output").innerHTML = capitalizeText;
    // showOutput(capitalizeText)
}