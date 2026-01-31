document.getElementById("clearInput").onclick=function(){
    document.getElementById("inputText").value="";
}

document.getElementById("clearOutput").onclick=function(){
    document.getElementById("output").innerHTML="";
}


document.getElementById("simpleAlert").onclick = function () {
    alert("Hey' I am simple alert")
}

function printMyName() {
    let myName = document.getElementById("inputText").value;

    if (myName === "") {
        alert("Please write your name")
        return;
    }
    document.getElementById("output").innerHTML = myName;
}

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

document.getElementById("printAllCities").onclick = function () {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>';
    }
}

document.getElementById("addCity").onclick = function () {
    let city = document.getElementById("inputText").value;
    if (city === "") {
        alert("Please Enter Your City First")
        return;
    }
    cities.push(city)
    document.getElementById("output").innerHTML = '<span style="color:green;font-size:20px;">"' + city + '"</span> has been successfully added into list.';

}

// document.getElementById("generateTable").onclick = function () {
//     let tableNumber = document.getElementById("inputText").value;
//     if (tableNumber === "") {
//         alert("Please Enter Your Table Number")
//         return;
//     }
//     for (i = 0; i < 10; i++) {
//         let num = i + 1;
//         document.getElementById("output").innerHTML += num + ')' + [i] + '<br>';
//     }
// }

document.getElementById("generateTable").onclick = function () {
    let tableNumber = document.getElementById("inputText").value;
    let outputDiv = document.getElementById("output");
    
    // Clear previous table
    outputDiv.innerHTML = "";

    if (tableNumber === "") {
        alert("Please Enter Your Table Number");
        return;
    }

    tableNumber = parseInt(tableNumber); // convert string to number

    for (let i = 1; i <= 10; i++) {
        let result = tableNumber * i;
        outputDiv.innerHTML +=  tableNumber+ " x " + i + " = " + result + "<br>";
    }
}

