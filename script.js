// Methods to create object in  js

// using literal syntax

// let users = {
//   c1: {
//     name: "Piyush",
//     age: 22,
//     city: "Delhi",
//   },

//   c2:{
//     name: "Rahul",
//     age: 24,
//     city: "Mumbai",
//   }
// };

// console.log(users.c1, users.c2);

//using the new object

// let users = new Object();

// users.c1 = {
//     name: "Piyush",
//     age: 22,
//     city: "Delhi",

// }

// users.c2 = {
//     name: "Rahul",
//     age: 24,
//     city: "Mumbai",
// }

// console.log(users);

//using constructor function

// function user(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;

// }

// let c1 = new user("Piyush", 22, "Delhi");
// let c2 = new user("Rahul", 24, "Mumbai");

// console.log(c1, c2);

// const person = {
//     isHuman: true,
//     printINtroduction:function(){
//         console.log(`My name is ${this.name}`)
//     }
// }

// const me = Object.create(person);
// me.name = "Piyush";
// console.log(me);
// console.log(person.name);
// me.printINtroduction();

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symb = "!@#$%^&*()";

function generatePassword() {
  let password =
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)] +
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)] +
    nums[Math.floor(Math.random() * nums.length)] +
    symb[Math.floor(Math.random() * symb.length)];

    console.log("initial pass :" , password);
  const combinedString = uppercaseLetters + lowercaseLetters + nums + symb;
  while (password.length < 10) {
    let randomIdx = Math.floor(Math.random() * combinedString.length);
    console.log("randomIdx: ",randomIdx)
    let newChar = combinedString[randomIdx];
    password += newChar;
    console.log(password);
  }
}


generatePassword();


