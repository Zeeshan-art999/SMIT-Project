function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    output.innerHTML += "<br>You clicked the button @" + theHr + " : " + theMin + " : " + theSec + "sec<br />";
}

const inputValue = () => {
    return document.getElementById("inputText").value;
}




const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getNameOfToday() {
    let rightNow = new Date();
    // console.log(rightNow)
    let theDay = rightNow.getDay();
    // console.log(theDay)
    let nameOfToday = dayNames[theDay];
    // console.log(nameOfToday)
    document.getElementById("output").innerHTML = nameOfToday;

    tellTime();
}

function calculateDaysPassed() {
    let dob = document.getElementById("inputText").value;
    // console.log("dob")

    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    let today = new Date();
    let bornDate = new Date(dob);
    // console.log(today)
    // console.log(bornDate)

    // let todayTime = today.getTime();
    // let bornDateTime = bornDate.getTime();
    // console.log(todayTime)
    // console.log(bornDateTime)

    let msDiff = today.getTime() - bornDate.getTime();
    // console.log(msDiff)

    let daysDiff = msDiff / (1000 * 60 * 60 * 24); //this line generate a floating point

    let html = Math.floor(daysDiff) + "days have been passsed since you born";
    document.getElementById("output").innerHTML = html;

    tellTime();
}

function nextBirthday() {
    // let dob = inputValue()
    let dob = document.getElementById("inputText").value;

    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    let today = new Date();
    let nextBirthDay = new Date(dob);

    let msDiff = nextBirthDay.getTime() - today.getTime();

    let daysDiff = msDiff / (1000 * 60 * 60 * 24);

    let html = "Your next birth day is ' " + Math.floor(daysDiff) + "' days away";
    document.getElementById("output").innerHTML = html;

    tellTime();
}

function greetUser(UserName) {
    document.getElementById("output").innerHTML = "Good Afternoon " + UserName
}
function greetUserButton() {
    let userName = prompt("Enter your name");
    greetUser(userName)
}

function tellTime1() {
    //     var now = new Date();
    //     var theHr = now.getHours();
    //     var theMin = now.getMinutes();
    //     var theSec = now.getSeconds();

    //     output.innerHTML += "<br>You clicked the button @" + theHr + ";" + theMin + ";" + theSec + "<br />";
    tellTime();
}

function tellTime2() {
    // var now = new Date();
    // var theHr = now.getHours();
    // var theMin = now.getMinutes();
    // var theSec = now.getSeconds();

    // output.innerHTML += "<br>You clicked the button @" + theHr + ";" + theMin + ";" + theSec + "<br />";
    tellTime();
}

function tellTime3() {
    // var now = new Date();
    // var theHr = now.getHours();
    // var theMin = now.getMinutes();
    // var theSec = now.getSeconds();

    // output.innerHTML += "<br>You clicked the button @" + theHr + ";" + theMin + ";" + theSec + "<br />";
    tellTime();
}

function calculateTaxBtn() {
    let price = +prompt("Enter price")
    var taxRate = 17;

    //   var tax = price * taxRate / 100;
    var tax = calculateTax(price, taxRate)
    let html = "Tax: " + tax;
    document.getElementById("output").innerHTML = html
}
function calculateTax(price, taxRate) {
    var tax = price * taxRate / 100;
    return tax;
}

function calculateTotal(price){

    if (price < 1000){
        var taxRate = 8;
    }else{
        var taxRate = 16;
    }

    var tax = calculateTax(price,taxRate)
    var total = price + tax;

    return total;
}
function calculateTotalBtn(){
    var price = +prompt("Enter price");
    if (!price){
        alert("Enter your price")
    }

    var total = calculateTotal(price);
    let html = "Total:" + Math.round(total);
    document.getElementById("output").innerHTML = html;
}