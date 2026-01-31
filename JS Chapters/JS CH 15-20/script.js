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

let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir"]

document.getElementById("printAllCities").onclick = function () {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>';
    }
}

document.getElementById("addCity").onclick=function(){
    let city= document.getElementById("inputText").value;
    if(city===""){
        alert("Please Enter Your City First")
        return;
    }
    cities.push(city)
    document.getElementById("output").innerHTML='<span style="color:green;font-size:20px;">"' + city+'"</span> has been successfully added into list.';

}