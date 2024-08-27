// function calculate() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;
//     let result;

//     if (operator === "add") {
//         result = num1 + num2;
//     } else if (operator === "subtract") {
//         result = num1 - num2;
//     } else if (operator === "multiply") {
//         result = num1 * num2;
//     } else if (operator === "divide") {
//         result = num1 / num2;
//     }

//     document.getElementById("result").innerText = "Result: " + result;
// }
//&& operator 
// console.log("hello" &&"Welcome") //------welcome
// console.log("hello" &&" ")// 
// console.log("hello" && 15);//15
// console.log(!!"hnjiii")//true
//console.log(!!" ")//false
//<<<<<-----------OR operator--------------->>>>>
// console.log("hello" ||"Welcome")//hello
// console.log("" ||" ")//
// console.log(null || 15);//15
//
//
//----------------->Simple Calculator Program<-------------------
//
//
let opr=prompt("enter the operator i.e.+,-,*,/");
 let num1=parseFloat(prompt("enter the first number"));
 let num2 =parseFloat(prompt("enter the second number"));
if (opr == '+'){
 document.write( "Value after addition is ",num1+num2);
}
else if (opr =='-'){
document.write( "Value after addition is ",num1-num2);
}

else if  (opr =='*'){
document.write("Value after addition is ", num1*num2);
}

else if(opr=="/"){
document.write("Value after addition is ",num1/num2);
}

else
document.write("enter the correct opr and value");

