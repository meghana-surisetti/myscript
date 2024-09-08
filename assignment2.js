//Introduction to Arrays, Creating, Accessing - Arrays, Methods in Arrays

//1. Create an array of fruits and print the elements using a for loop.

var fruits=["mango","dragon fruit","orange","papaya","pine apple"];
for(var i=0;i<fruits.length;i++){
console.log(`${fruits[i]}`);
}

//2. Access the third element of an array and print it.
console.log(fruits[2]);

//3. Find the length of an array and print it.
var arrayLength=fruits.length;
console.log(`the length of the array is ${arrayLength}`);



//Operations: Add, Remove - push(), pop(), unshift(), shift() Methods in Arrays

//1. Add an element to the end of an array using the `push()` method.
fruits.push("guava");
console.log(fruits);

//2. Remove the last element from an array using the `pop()` method.
fruits.pop();
console.log(fruits);

//3. Add an element to the beginning of an array using the `unshift()` method.
fruits.unshift("apples","grapes");
console.log(fruits);

//4. Remove the first element from an array using the `shift()` method.
fruits.shift();
console.log(fruits);




//Introduction to Objects:

//1. Create an object representing a person with properties like name, age, and city.
var person={
    name:"Meghana",
    age:20,
    city:"vizag",
};

//2. Access the person's name using both dot notation and square bracket notation.
console.log(`name of the person is(accessed using dot notation) ${person.name}`);
console.log(`name of the person is(accessed using bracket) ${person['name']}`);

//3. Add a new property "occupation" to the person object using dot notation.
person.occupation="software developer";
console.log(person);

//4. Add a new property "hobbies" to the person object using square bracket notation.
person['hobbies']=["mehandi arts","listening to music"];
console.log(`hobbies are ${person['hobbies']}`);




//Creating Objects with Properties & Methods

//1. Create a `Car` object with properties like `make`, `model`, and `year`. Add a method `drive()` that logs a message when called.

var car={
    make:"BMW Group",
    model:"BMW 2 Series Gran Coupe",
    year:2020,
    drive:function(){
        console.log(`The ${this.model} is made by ${this.make} in the year${this.year}!`);

    }
};
car.drive();

//2. Create a `Calculator` object with methods like `add`, `subtract`, `multiply`, and `divide`. Call these methods with different numbers.
var calculator={

    add:function(a,b){
        console.log(`${a}+${b}=${a+b}`);
    },
    subtract:function(a,b){
        console.log(`${a}-${b}=${a-b}`);
    },
    multiply:function(a,b){
        console.log(`${a}*${b}=${a*b}`);
    },
    divide:function(a,b){
        console.log(`${a}/${b}=${a/b}`);
    }

}
calculator.add(278,309);
calculator.subtract(30,20);
calculator.multiply(13,4);
calculator.divide(30,3);



//Iterations: For Loop, While Loop, Break & Continue Statement

//1. Iterate over an array of numbers using a `for` loop and print each number.
var numbers=[29,3,19,17,13,1,2];
for(var i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//2. Iterate over an array of strings using a `while` loop and print each string.
var names=["meghana","keerthana","dhakshith","gowtham","ankith","abhi"];
var i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}

//3. Use a `for` loop to find the sum of all elements in an array.
var numArr=[9,45,789,90,234];
var sum=0;
for(var i=0;i<numArr.length;i++){
    sum+=numArr[i];
}
console.log("the sum of the numbers in array ="+sum);

//4. Use a `while` loop to find the first even number in an array.
var j=0;
while(numArr[j]%2!=0){
    j++;
}
console.log(numArr[j]);


//5. Use a `for` loop with a `break` statement to exit the loop when a certain condition is met.
//-----below code prints first even number form the array----
for(var i=0;i<numArr.length;i++){
    if(numArr[i]%2==0){
        break;
    }
}
console.log(numArr[i]);

//6. Use a `for` loop with a `continue` statement to skip certain elements in the array.
//------below code prints only even numbers from an array------
for(var i=0;i<numArr.length;i++){
    if(numArr[i]%2!=0){
        continue;
    }
    else{
        console.log(numArr[i]);
    }
}




//Behind The Scenes: Variable Scope - Global vs Local Variables, Hoisting: Variables, Functions

//1. Demonstrate the difference between global and local variables using examples.
var no1=45;
var no2=78;
function variableScope(){
    var no3=29;
    var no4=3;
    console.log(`variables inside the function scope are :${no3},${no4}`);
    console.log(`vraibales oustside the function scope are : ${no1},${no2}`);
}
variableScope();
console.log(`only variables that can be accsessed outside the function scope are:${no1},${no2}`);

//2. Explain the concept of hoisting and its impact on variable declaration and function calls.
sName="Meghana";
//sNum="A22125610201";
console.log(sName);
//console.log(sAge);
//console.log(sNum);
var sName;
//const sAge;
//sAge=20;
let sNum;

//3. Write code to illustrate hoisting and its consequences.
hoistedFunction(); 

function hoistedFunction() {
    console.log("This function is hoisted");
}
console.log(hoistedVar); 
var hoistedVar = 10;
console.log(hoistedVar); 




//Hosting Coding Exercise, Understanding 'this' keyword,


//1. Create a function that demonstrates hoisting by calling a function before it's declared.
hoistedFunction(); 

function hoistedFunction() {
    console.log("This function is hoisted");
}
console.log(hoistedVar); 


//2. Explain how the `this` keyword behaves in different contexts (e.g., regular functions, object methods, arrow functions).
function rFun() {
    console.log(this);
}

rFun(); 

function showName() {
    console.log(this.name);
}

const personobj = { name: "John" };
showName.call(personobj); 


const obj34 = {
    name: "Alice",
    greet: () => {
        console.log(this.name);
    }
};
obj34.greet(); 


//4. Use the `arguments` keyword to access all arguments passed to a function.

function observingParameters(name1,name2,name3){
    console.log(arguments);
    console.log(`passed args are:${name1},${name2},${name3}!`);
}
observingParameters("Meghana","keerthana","Jagadi");

const oPP=function(name1,name2,name3){
    console.log(arguments);
    console.log(`passed args throgh anonymous function are:${name1},${name2},${name3}!`);
}
oPP("Meghana","keerthana","Jagadi");

const oPP1=(name1,name2,name3)=>{
    //console.log(arguments);
    console.log(`passed args throgh arrow function are:${name1},${name2},${name3}!`);
}
oPP1("Meghana","keerthana","Jagadi");

//5. Compare and contrast objects and primitives in terms of their behavior and properties.
var subject="DBMS";
var Teacher="Aswini";
console.log(`before trying to update;
     subject:${subject} ,
     teacher:${Teacher}`);

var subjectDealing=subject;
var TeacherDealing=Teacher;
TeacherDealing="Sundeep"


console.log(`after trying to update:
    subject-before:${subjectDealing},
    teacher:${TeacherDealing}`);

var facultyDetails={
    name:"Aswini",
    subject:"DBMS",
}    
console.log(`before trying to update (actual values are Aswini,DBMS):${facultyDetails.name},${facultyDetails.subject} `);

var newFaculty=facultyDetails;
newFaculty.name="Sundeep";
console.log(`after trying to update (values should be Sundeep,DBMS):${newFaculty.name},${newFaculty.subject} 
    old faculty(value should be Aswini)${facultyDetails.name}`);

