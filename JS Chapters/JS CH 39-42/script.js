function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}

function ifElseStatement() {
    var now = new Date();
    var today = now.getDay();

    // today = 4;

    // switch (today) {
    //     case 0: showOutput("It's Sonday");
    //         break;
    //     case 1: showOutput("It's Monday");break;
    //     case 4: showOutput("It's Thursday");break;
    //     case 5: showOutput("It's Friday");break;
    //     default: alert("It's some other day")
    // }


    // if (today === 0) {
    //     showOutput("It's Sunday")
    // }
    // else if (today === 1) {
    //     showOutput("It's Monday")
    // }
    // else if (today === 2) {
    //     showOutput("It's Tuesday")
    // }
    // else if (today === 5) {
    //     alert("It's Friday")
    // } else {
    //     alert("It's some other day")
    // }

    switch (today) {
        case 0: case 1: showOutput("Its Sunday or Monday")
        case 4: case 5: showOutput("Its Thursday or Friday")
        default: alert("It's some other day")
    }

    // if (today === 0 || today === 1) {
    //     showOutput("Its Sunday or Monday")
    // }
    // else if (today === 4 || today === 5) {
    //     showOutput("Its Thursday or Friday")
    // }
    // else {
    //     alert("It's some other day")
    // }

}

function switchStatement() {
    var now = new Date();
    var today = now.getDay();

    //  today = 0;
    // if (today===0 || today===6)
    switch (today) {
        case 0: case 6: showOutput("Its Sunday or Saturday");
            break;
        case 1: showOutput("It's Monday"); break;
        case 4: showOutput("It's Thursday"); break;
        case 5: showOutput("It's Friday"); break;
        default: alert("It's some other day")
    }
}

function keepAsking() {
    do {
        var name = prompt("Enter your name?")
        console.log(name)
    } while (name === null || name.length < 3) {
        showOutput(name)
    }
}