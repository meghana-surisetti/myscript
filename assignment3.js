//behind the scenes

//1.shallow copy:
//- Create an object `person1` with properties `name` and `age`.
var person1={
    name:"Meghana",
    age:20,
}

//- Create a shallow copy `person2` of `person1`.
var person2=Object.assign({},person1);

//- Modify a property in `person2`.
person2.age=19;

//- Check if the property in `person1` has also changed.
console.log(`person1 details: 
    name:${person1.name}
    age:${person1.age}`);
console.log(`person2 details:
    name:${person2.name}
    age:${person2.age}`);


//2. deep copy:

//- Create a function `deepCopy` that recursively copies objects, including nested objects.
var p2;
function deepcopy(obj1,obj2){
    obj2=obj1;
    console.log(obj2);

}

//- Test `deepCopy` with an object containing nested objects.
var p1={
    name:"Maggie",
    age:20,
    qualification:"Btech",
    skills:["MERN Stack","java"],
    internship:{
        company:"XCEEDIQ",
        employees_count:100,
    }
}

deepcopy(p1,p2);
//console.log(p2);




//### Data Structures and Operators

//1. Restaurant Code:

//- Create an object `restaurant` with properties like `name`, `location`, and `menu`.
//- The `menu` property should be an array of objects, each representing a dish with `name`, `price`, and `description`.

var restaurant={
    name:"Crispy's",
    location:"Rushikonda",
    menu:[
        {
            name:"Fried chicken",
            price:249,
            description:"Crispy, golden-brown fried chicken seasoned with a blend of spices, served with a side of mashed potatoes and gravy."
        },
        {
            name:"French Fries",
            price:99,
            description:"Crispy golden fries, lightly salted and served with ketchup or your choice of dipping sauce."
        }
    ]
}

//- Use spread operators to create a new menu item.
const newMenuItem = {
    ...restaurant.menu.find(dish => dish.name === 'French Fries'),
    name: 'Loaded Fries',
    price: 6.99,
    description: 'Crispy golden fries topped with melted cheese, bacon bits, and sour cream.'
  };
  
  restaurant.menu.push(newMenuItem);
  
  // Logging the updated menu
  console.log(restaurant.menu);

  
  //- Use JSON.stringify to convert the restaurant object to JSON.
const restaurantJSON = JSON.stringify(restaurant, null, 2);
console.log(restaurantJSON);


//### Advance Functions

//- Create a function that calculates the area of a rectangle, with default values for width and height.
function areaOfRectangle(width=10,height=10){
    return width*height;
}
console.log("Area of rectangle calculated with no parameters passed is  "+areaOfRectangle());
console.log("area of rectangle with height:30,width:40 is "+areaOfRectangle(40,30));





//2. Pass by Value & Pass by Reference:

//- Demonstrate the difference between passing primitive values and objects by value and reference.
var product="compact";
var made={
    company:"lakme",
}

var billing=function(p,n){
    var pPrice=399;
    if (p===product){
        console.log(`Billing details: product:${made.company}${p},cost:${pPrice},total cost:${n*pPrice}`);
    }

    else{
        console.log(`${p} is currently undefined`);
    }
    
}

console.log(billing("compact",5));
console.log(billing("Kajal",3));

var purchasedPdt=product;
var manufactured=made;
manufactured.company="loreal";

console.log(billing("compact",4))

console.log(made.company);



//3. Callback Functions:

//- Create a function that takes a callback function as an argument and calls it after a certain delay.
function delayedExecution(callback, delay) {
    setTimeout(function() {
        callback();
    }, delay);
}
function sayHello() {
    console.log('Hello after delay!');
}
delayedExecution(sayHello, 2000);




//### Functions Returning Functions

//1. Creating Functions:
//- Create a function that returns another function.


function fullName(greeting){
    return function(str){
        var [fName,...remain]=str.split(' ');
    console.log(greeting +" "+fName+"!");
    };
};

fullName("hey")("Meghana Surisetti");
fullName("hello");




//2. call(), apply(), and bind() with Objects:
//- Create an object representing a flight booking with passenger details.
let spicejet={
    airLine:"SpiceJet",
    iataCode:'SEJ',
    bookings:[],
    book:function(flightNum,passengerName){
        console.log(`${passengerName} has booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum},name`});
    }

}
let indiGo={
    airLine:"Indigo",
    iataCode:'IGO',
    bookings:[],

}
let airIndia={
    airLine:"Air India",
    iataCode:'AI',
    bookings:[],

}
//- Use `call`, `apply`, and `bind` to call methods of the object with different contexts.
spicejet.book(65975468415,"Meghana");
const book=spicejet.book;

//call
book.call(indiGo,789455622648,"Steven");

//apply
var ppp=[32169874596,"keerthana"];
book.apply(airIndia,ppp);

//bind
const app=book.bind(indiGo);
app(598746321569,"gowtham");






//### IIFE, Closures, and Self-Executing Functions

//1. IIFE:
//- Create an IIFE that logs a message to the console.

(()=>{console.log("This message is from an immediately invoked function .The cool feature of this function is that we need not to call this  function but can be accessed only once")})();


//2. Self-Executing Functions:

//- Create a self-executing function that initializes a variable.
(function(){
    var count=10;
    
        console.log(count);

})();



//3. Closures:

//- Demonstrate closure by creating a function that returns a function that remembers a value.

function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer value: ${outerValue}`);
        console.log(`Inner value: ${innerValue}`);
    };
}
const rememberValue = outerFunction('Hello, World!');
// Now the inner function "remembers" the value of `outerValue`
rememberValue('Closure in JavaScript');





//### Strings

//1. String Methods:

//- Implement methods like `split`, `join`, `toUpperCase`, `toLowerCase`, `padStart`, `padEnd`, `slice`, `repeat`, `replace`, `trim`, `startsWith`, `endsWith`, and `includes`. Methods:
//split and join
var strng="she-is-a-good-girl";
var sstrng=strng.split("-");
console.log(sstrng);
var jstrng=sstrng.join(" ");
console.log(jstrng);

//`toUpperCase`, `toLowerCase`
const originalString = 'hello world';
const upperCaseString = originalString.toUpperCase();
console.log('Original String:', originalString);   
console.log('Uppercase String:', upperCaseString);


const loriginalString = 'HELLO WORLD';
const lupperCaseString = originalString.toLowerCase();
console.log('Original String:', loriginalString);   
console.log('lowercase String:', lupperCaseString);

//padStart and padEnd

console.log(originalString.padStart(20," ._. "));
console.log(originalString.padEnd(20," ._. "));

//slice and repeat

console.log(originalString.slice(0,5));
console.log(" ._. ".repeat(10));

//replace and trim

var urstrg="hey siri! play songs";
console.log(urstrg);
console.log(urstrg.replace("siri","alexa"));

var tstrg="    sentence with spaces before using trim    ";
console.log(tstrg);
console.log(tstrg.trim());


//startswith and endswith and includes

console.log(urstrg.startsWith("hey"));
console.log(urstrg.endsWith("song"));
console.log(urstrg.includes("play"));


//2.Examples

//- Mask a credit card number using `padStart` and `padEnd`.

var cNumber="956" ;
//var pscn=creditNumber.padStart(10,"*");
console.log(cNumber.padStart(9,"*"));


//- Capitalize the first letter of each word in a sentence.
let sentence = "capitalize the first letter of each word";
let words = sentence.split(' '); 

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
}
let capitalizedSentence = words.join(' '); 
console.log(capitalizedSentence);

//- Compare email addresses for equality.
let email1 = "Example@Domain.com";
let email2 = "  example@domain.com  ";
let isEqual = email1.trim().toLowerCase() === email2.trim().toLowerCase();
console.log(isEqual); 


//### Booleans
//2. Examples:
//- Check if a string starts or ends with a specific substring.
let str = "Hello, world!";
let startsWithHello = str.startsWith("Hello"); 
let endsWithWorld = str.endsWith("world!"); 
console.log(startsWithHello); 
console.log(endsWithWorld);  

//- Find the index of a substring within a string.
let strr = "Hello, world!";
let substring = "world";
let index = strr.indexOf(substring);

console.log(index); // 7
