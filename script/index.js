// 1st Lesson
/*
console.log("");
window.alert("");

let age = 21; 
let firstName = "Ahmet"
let student = true;

console.log(age);
console.log(firstName);
console.log(student);
console.log("You are", age, "years old!");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

// 2nd Lesson
/*
let students = 20;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
let extraStudents = students % 2;
students += 1;
students -= 1;
students *= 2;
students /= 2;
console.log(extraStudents);
*/

// 3rd Lesson
/*
let username; //= window.prompt("What's your name?");
console.log(username);
document.getElementById("myButton").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
  //document.getElementById("myLabel").innerHTML = "Hello " + username;
}
*/

// 4th Lesson
/*
//Type Conversion = change the datatype of a valıe to another.
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
age = String(age);
age = Boolean(age);
console.log(typeof age);
age += 1;
console.log("Happy Birtday! You are ", age , "years old.");
*/

// 5th Lesson
/*
// const = a variable that can't be changed.
let pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log("The circumference is: ", circumference);
*/

// 6th Lesson
/*
let x;
let y = 5;
let z = 9;
let maximum;
let minimum;
maximum = Math.max(x, y, z);
minimum = Math.max(x, y, z);
x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 3);
x = Math.sqrt(x);
x = Math.abs(x);
x = Math.PI;
console.log(x);
*/

// 7th Lesson
/*
let a;
let b;
let c;
a = window.prompt("Enter side A:");
a = Number(a);
b = window.prompt("Enter side B:");
b = Number(b);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C: ", c);
document.getElementById("submitButton").onclick = function(){
  a = document.getElementById("aTextBox").value;
  a = Number(a);
  b = document.getElementById("bTextBox").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("cLabel").innerHTML = "Side C: " + c;}
*/

// 8th Lesson
/*
let count = 0;
document.getElementById("decreaseButton").onclick = function() {
  count-=1;
  document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function() {
  count=0;
  document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseButton").onclick = function() {
  count+=1;
  document.getElementById("countLabel").innerHTML = count;
}*/

// 9th Lesson
/*
document.getElementById("rollButton").onclick = function() {
  let x = Math.floor(Math.random() * 6) + 1;
  let y = Math.floor(Math.random() * 6) + 1;
  let z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
}*/

// 10th Lesson
/*
// Usefull string properties & methods.
let userName = "Ahmet Kadir Cicek";
let phoneNumber = "1234-567-89-00"
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.trim());
console.log(userName.toUpperCase);
console.log(userName.toLowerCase);
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber)*/

// 11th Lesson
/*
let fullName = "Ahmet Kadir Cicek";
let firstName;
let lastName;
firstName = fullName.slice(0, fullName.indexOf(" ") + 1);
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
*/

// 12th Lesson
/*
// Method Chaining = calling methods in one line of code.
let userName = "ahmet";
let letter = userName.charAt(0).trim().toUpperCase;*/

// 13th Lesson
/*
// if statement
let age = 1;
if(age>=18){console.log("You are an adult!");}
else if( age < 0){console.log("You haven't been born yet!")}
else{console.log("You are a child!");}

let online = true;
if(online){console.log("You are online!")}
else if(online){console.log("You are offline!")}
*/

// 14th Lesson
/*
document.getElementById("myButton").onclick = function() {
  const myCheckbox = document.getElementById("myCheckbox")
  const visaButton = document.getElementById("visaButton")
  const masterButton = document.getElementById("masterButton")
  const paypalButton = document.getElementById("paypalButton")
  if(document.getElementById("myCheckbox").checked == true){
    console.log("You are subscribed!");}
  else{
    console.log("You are not subscribed!");}
  if(visaButton.checked){
    console.log("You are paying with a Visa!")}
  else if(masterButton.checked){
    console.log("You are paying with a Master!")}
  else if(paypalButton.checked){
    console.log("You are paying with a PayPal!")}
  else{console.log("You MUST select a payment!")}}
*/

// 15th Lesson
/*
let grade = "A";

switch(grade)
{
  case "A":
    console.log("You did grate!");
    break;

  case "B":
    console.log("You did good!");
    break;
  
  case "C":
    console.log("You did okay!");
    break;
    
  case "D":
    console.log("You barely passed!");
    break;

  case "F":
    console.log("You failed!");
    break;

  default:
    console.log(grade, "is not a latter grade!")
}*/

// 16th Lesson
/* 
  Gives the ability to check more than 1 condition concurrently
    && AND (Both conditions must be true)
    || OR (Either condition can be true)

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
  console.log("The weather is good!");
}
else{
  console.log("The weather is bad!");
}
*/

// 17th Lesson
/* 
  ! NOT logical operator
    .typically used to reverse a condition's boolean value

let temp = -15;
if(!(temp > 0)){
  console.log("It's cold outside!");
}
else{
  console.log("It's warm outside!");
}  
*/

// 18th Lesson
/*
  while loop
    repeat some code while some condition
    is true potentially infinite.
let userName = "";
while(userName == "" || userName == null){
  userName = window.prompt("Enter your name: ");
}
console.log("Hello", userName);

  do while loop
      do something then check the condition,
      repeat if condition is true.
  let userName = "";
  do{
    userName = window.prompt("Enter your name: ");
  }while(userName == "")
  console.log("Hello", userName);
*/

// 19th Lesson
/*
  for loop
    repeat some code a certain amount of times

for(let counter = 1; counter <=10; counter+=1)
{
  console.log(counter);
}
*/

// 20th Lesson
/*
  break
    breaks out of a loop entirely
  continue
    skip an iteration of a loop
for(let i=1; i<=20; i+=1){if(i==13){continue;}}
*/

// 21th Lesson
/*
 nested loop
    a loop inside of another loop

  for(let i=1; i<=2; i+=1){
    for(let j=1; j<=3; j+=1)
    {console.log(j);}};
*/

// 22th Lesson
/*
 function
    define code once, and use it many times.
    to perform some code, call the function name.

function Age();
let age = 21;
function Age(){
  console.log("You are" ,age ,"years old."); 
}
*/

// 23th Lesson
/* 
  return
    returns a value back to the place where
    you invoked a function
let area;
let width;
let height;

width = window.prompt("Enter witdh: ")
height = window.prompt("Enter height: ");

area = getArea(width, height)
console.log("The area is: ", area);

function getArea(width, height){
  let result = width * height;
  return result;
}
*/

// 24th Lesson
/*
  ternary operator
    shortcut for an if/else statement
    takes 3 operand:
      a condition with ?
      expression if True
      expression if False

  condition ? expressionIfTrue : expressionIfFalse

let adult = checkAge(21);

function check(age)
{
  return age >= 18 true ? false;
}
*/

// 25th Lesson
/*
  let
    variables are limited to block scope{}
  var
    variables are limited to a function(){}
  
  global variable
    is decleared outside any function
  (if global, var will CHANGE browser's window properties)
  
function doSomething(){
  for(var i = i; i <= 3; i+=1)
{console.log(i);}};

*/

// 26th Lesson
/*
  template literals
    delimited with (')
    instead of double or single quotes
    allows embeded variables and expressions
let userName = "Ahmet";
let items = 3;
let total = 75;

//console.log("Hello", userName);
//console.log("You have ", items, "items in your cart");
//console.log("Your total is $", total);

console.log('Hello ${userName}');
console.log('You have ${items} items in your cart');
console.log('Your total is $${total}');
*/

// 27th Lesson
/*
  eString
    returns a string with a language 
    sensitive representation of this number

  .toLocaleString(locale, {options});

  e'
    specify that language
  undefine
    default set in browser language
    
  ns'
    object with formatting options

    let myNum = 123456,789;
    myNum = myNum.toLocaleString("en-US");
    myNum = myNum.toLocaleString("hi-IN");
    myNum = myNum.toLocaleString("de-DE");

    myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
    myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "IRN"});
    myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

    myNum = myNum.toLocaleString(undefined, {style: "percentage"});

    console.log(myNum);
*/

// 28th Lesson
/*
  array
    think of it as a variable
    that can store multiple values
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]);

fruits.push("lemon"); // add an element
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to beginning
fruits.shift(); //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("apple");

console.log(index);

let prices = [5, 10, 15, 20];

for(let i = prices.length - 1; i >= 0; i-=1){
  console.log(prices[i]);
}

for(let price of prices){
  console.log(price);
}
*/
    