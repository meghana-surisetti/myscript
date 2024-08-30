"use strict";

// Variables Declarations:

//1.create variables:

var firstName="Meghana";
let lastName="Surisetti";
const age="19";
console.log(`first name: ${firstName} and last name: ${lastName} and age:${age}`);

//2.variable scope:
var no1=45;
var no2=78;
function variableScope(){
    var no3=29;
    var no4=3;
    console.log(`variables inside the function scope are :${no3},${no4}`);
    console.log(`vraibales oustside the function scope are : ${no1},${no2}`);
}
variableScope();
console.log(`variables that can be accsessed outside the function scope are:${no1},${no2}`);


//operators

//1
let num1=20;
let num2=10;

//i)addition
console.log(`${num1} + ${num2} = ${num1 + num2}`);

//ii)subtraction
console.log(`${num1} - ${num2} = ${num1 - num2}`);

//iii)multiplication
console.log(`${num1} * ${num2} = ${num1 * num2}`);

//iv)divisio
console.log(`${num1} / ${num2} = ${num1 / num2}`);

//v)modulus
console.log(`${num1} % ${num2} = ${num1 % num2}`);


//2.comparision operators
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1===num2);
console.log(num1!==num2);

//3.logical operators
console.log("logical operators");
console.log(num1>num2 && num1>=num2);
console.log(num1>num2 || num1<num2);
console.log(!(num1>num2 && num1>=num2));



//datatypes

//1.primitive datatypes
let myAge=19;
let myName="Meghana";
let codingStatus=true;
let emptyval=null;
let undval;
console.log(`${myName} is a ${typeof myName}`);
console.log(`${myAge} is a ${typeof myAge}`);
console.log(`${codingStatus} is ${typeof codingStatus} value`);
console.log(`${emptyval} is ${typeof emptyval}`);
console.log(`${undval} is ${typeof undval}`);


//2.object creation and manipulation.



//type conversions and coercions

//1.explicit type conversion 
let personAge=40;
let personName="steve";
let personGPA=9.8;
console.log(String(personAge));
console.log(Number(personGPA));
console.log(Boolean(personName));

//2.implicit type corecion
console.log(5 + "3");    
console.log(5 - "3");    
console.log("5" * "2");  
console.log("5" / "2");  
console.log(5 + true);   

//string and template literals

//1.string manipulation
let str1="Meghana";
let str2="surisetti";
console.log("full name is "+str1+" "+str2);
console.log("character at index 5 is "+str1[5]);
console.log("length of string 1 is "+str1.length);
console.log("a sample sub string of 'Meghana' is "+str1.substring(0,5));

//template literals
let now=2024;
let bornYear=2004;
console.log(`${myName} is ${now-bornYear} years old!`);
console.log(`name: ${myName}
Bornyear:${bornYear}
current age:${now-bornYear}`);


//decision making statements

//1.if-else statements:
let temperature = 30;
if (temperature <= 0) {
    console.log("Weather: Freezing");
} else if (temperature > 0 && temperature <= 10) {
    console.log("Weather: Cold");
} else if (temperature > 10 && temperature <= 20) {
    console.log("Weather: Moderate");
} else if (temperature > 20 && temperature <= 30) {
    console.log("Weather: Warm");
} else {
    console.log("Weather: Hot");
}

//switch case
let animal = "Dog";
switch (animal) {
    case "Dog":
        console.log("Dogs are loyal and friendly.");
        break;
    case "Cat":
        console.log("Cats are independent and graceful.");
        break;
    case "Bird":
        console.log("Birds can fly and sing.");
        break;
    case "Fish":
        console.log("Fish live in water and swim.");
        break;
    case "Horse":
        console.log("Horses are strong and fast.");
        break;
    default:
        console.log("Unknown animal type.");
        break;
}



//function call and its defintions

//1.function declaration
function display(name,age){
    console.log(`username:${name} ; experience:${age} years`);
}
display(myName,myAge);

//2.function expressions
let add = function (a, b) {
    return a + b;
};
let result = add(3, 4);
console.log(result); 

//passing parameters to function

//1.passing arguments
function displayDetails(totalStudents,studentName,securedMarks,studyYear){
    var studyCourse="CSE"
    console.log(`out of ${totalStudents},pursuing course ${studyCourse} , ${studentName} ,of year ${studyYear} is the only student who secured ${securedMarks} !
    `)
}
var sN="meghana";
var sM=10;
var syr=3;
const ts=40;
displayDetails(ts,sN,sM,syr)



//2.default arguments
function sendWelcomeEmail(recipient, subject = "Welcome!", message = "Thank you for joining us.") {
    console.log(`Sending email to: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
}
sendWelcomeEmail("meghana@gmail.com");
sendWelcomeEmail("meghana@gmail.com", "Greetings!", "We're glad to have you onboard.");


//return statement

//1.returning values
function calculateRectangleArea(length, width) {
    return length * width; 
}
const area = calculateRectangleArea(5, 10);
console.log(`The area of the rectangle is: ${area}`);

//chaining function calls
function double(number) {
    return number * 2;
}
function addition(a, b) {
    return a + b;
}
const resu = addition(double(5), double(10)); 
console.log(`Result: ${result}`); 
