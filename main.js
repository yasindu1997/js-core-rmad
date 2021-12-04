alert("Hello Yasindu !");

console.log("Hello Yasindu !"); //js statement

//console.log("Welcome to RMAD !");

/*console.log("Hello");
console.log("Hello");
console.log("Hello");*/

//variables

var x = 10;
let y = 20;
const z = 30;

var x = 20;
let y = 40; //let cannot redeclare
const z = 60; //const cannot redeaclare

x = "yasindu";
y = "RMAD";
z = "IJSE"; //const variables cannot reassign values

// js datatypes

let age = 25; //number
let address = "panadura, srilanka"; //String
let isMarried = false; //boolean
let job; //undefined
let yasindu = { name: "yasindu", age: 25, address: "panadura" }
let dell_inspiron_3576 = { modal: "dell-inspiron", modelNo: 3576, ram: '12gb', hdd: 512 } //object

console.log(job);

//operators

//+,-,*,/,+=,++,-- (increment operator , decremental operator),%
let sum = 5 + 4;

let num1 = 10;
let num2 = 3;

let sum2 = num1 - num2;

num1 += 10; //num1= num1 + 10;

console.log(num1);

num2--;

console.log(num2);

console.log(num1 % num2); //modular / reminder

// flow controllers

// if else statement

let num1 = 30;
let num2 = 30;

if (num1 == 20) {
    console.log("True");
} else if (num1 < 30) {
    console.log("True 2");
} else if (num1 < 50) {
    console.log("True 3");
} else {
    console.log("False");
}

// swich statement

switch (num1) {
    case 20:
        console.log("num1 is 20");
        break;
    case 25:
        console.log("num1 is 25");
        break;
    case 30:
        console.log("num1 is 30");
        break;
    default:
        console.log("defalut print");
}

//function as variable
let welcomeMessage = function (name) {
    return "Good morning " + name;
}

//arrow function
let welcomeMessage = (name) => {
    return "Good morning " + name;
}

let msg = welcomeMessage("Kavindu");
alert(msg);

//parametarized function
function getSum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

//non parametarized function
function printName() {
    alert("Hello Yasindu !");
}

//return type function
function welcomeMessage(name) {
    return "Good morning " + name;
}

//js arrays

let name = "Yasindu";

let name2 = "Kavindu";

let name3 = "Malindu";

let studentNames = ["Yasindu", "Kavindu", "Malindu", "Pasan", "Rashmi"]; //String array

console.log(name);

console.log(studentNames[2]); //reading value from array

studentNames[2] = "Amith"; //writing value to array

let cars = [];

cars[0] = "Toyota";
cars[1] = "Mazda";
cars[2] = "BMW";

cars.push("Honda");

console.log(cars);

cars.pop();

console.log(cars);

console.log(studentNames.length);

let marks = [54, 78, 12, 56, 85, 100]; //number array

let ar = ["Yasindu", 25, "Panadura", 500000.00]; //object array

console.log(ar);

console.log(cars[1]);

console.log(studentNames[2]);

//Logical Operator > | < | >= | <= | & | |

let age = 32;

if (age > 30) {
    console.log("Adult");
} else if (age > 18) {
    console.log("Young");
} else {
    console.log("Child");
}

let ol = true;
let al = true;

if (ol && al) {
    console.log("Eligible for the Job");
} else {
    console.log("Not Eligible for the Job");
}

//loops in js

console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");

let ar = [];

ar[0] = 20;
ar[1] = 20;
ar[2] = 20;
ar[3] = 20;

//for-loop
for (let i = 0; i < 10; i++) {
    console.log("Hello Yasindu");
}

for (let i = 0; i < ar.length; i++) {
    ar[i] = 20;
}

//while loop

let controller = 0;

while (controller < 10) {
    console.log("Hello IJSE");
    controller++;
}

//for-each loop

let studentNames = ["Yasindu", "Pasindu", "Kavindu", "Rashmi", "Buwaneka"];

//in / of
for (let student of studentNames) {
    console.log(student);
}

//intro to oop using js

let student_yasindu = {
    name: "yasindu",
    address: "Colombo",
    age: 25,
    favourites: ["Coding", "Eating"]
}

let students = [{
    name: "Yasindu",
    address: "Colombo",
    age: 25,
    favourites: ["Coding"]
}, {
    name: "Amith",
    address: "Mathugama",
    age: 25,
    favourites: ["cook", "dance"]
},
{
    name: "Kamal",
    address: "Panadura",
    age: 27,
    favourites: ["swimming", "play games"]
}
]

for (let student of students) {
    console.log(student.address);
}