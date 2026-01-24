document.getElementById("alertString").onclick = function () {
    alert('I am Zeeshan')

    let statment = "alert ('I am Zeesahn')"
    document.getElementById("statment").innerHTML = statment;

    document.getElementById("output").innerHTML = "";
}

document.getElementById("alertNumber").onclick = function () {
    alert(123)

    let statment = "alert(123)"
    document.getElementById("statment").innerHTML = statment;

    document.getElementById("output").innerHTML = "";
}

document.getElementById("variableNames").onclick = function () {

    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letter,numbers,dollar sign,and underscores.</li><li>Though a variable name can't be any of JavaScript's Keywords. it can contain keywords. for example,<code>userAlert</code>and<code>myVar</code>are legal.</li><li>Capital letters are fine,but be careful. Variable name are case sensitive. A <code>rose</code> is not a <code>Rose</code>. if you assign the string 'Floribundas' to the variable <code>rose</code> and then ask the JavvaScript for the value assigned to <code>Rose</code> you'll come up empty.</li></ul>"
    document.getElementById("output").innerHTML = html;
}

document.getElementById("camelCaseExamples").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let html = "<ul><li>userNumberValue=<code>camel case</code></li><li>user_number_value=<code>snake case</code> </li><li>UserNumberValue=<code>pascal case</code></li><li> USER_NUMBER_VALUE=<code>scereaming snake case</code></li><li> user_number_Value=<code>kebabcase</code></li></ul>"
    document.getElementById("output").innerHTML = html;
}

document.getElementById("sum2Numbers").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>"
    let statment = "let num1 = " + num1 + ";<br>let num2=" + num2 + ";<br>let sum = num1 + num2;"
    document.getElementById("statment").innerHTML = statment;

}

document.getElementById("substract2Numbers").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 50;
    let num2 = 30;
    let sum = num1 - num2;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>"
    let statment = "let num1 = " + num1 + ";<br>let num2=" + num2 + ";<br>let sum = num1 - num2;"
    document.getElementById("statment").innerHTML = statment;

}

document.getElementById("multiply2Numbers").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 5;
    let num2 = 3;
    let sum = num1 * num2;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>"
    let statment = "let num1 = " + num1 + ";<br>let num2=" + num2 + ";<br>let sum = num1 * num2;"
    document.getElementById("statment").innerHTML = statment;

}

document.getElementById("divide2Numbers").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 15;
    let num2 = 3;
    let sum = num1 / num2;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>"
    let statment = "let num1 = " + num1 + ";<br>let num2=" + num2 + ";<br>let sum = num1 / num2;"
    document.getElementById("statment").innerHTML = statment;

}

document.getElementById("calculatesomeNumbers").onclick = function () {
    document.getElementById("statment").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("output").innerHTML = "<p class='text-center'>" + someCalculation + "</p>"
    let statment = "let someCalculaton = 36 / 6 * 3 + 2 ** 4 - (3+5);"
    document.getElementById("statment").innerHTML = statment;

}