// access a dom node
const pageTitle = document.getElementById("page-title");
const stringExample = document.getElementById("string-example");
// log the innerHTML of that dom node
console.log(pageTitle.innerHTML);

// const vs let
// const ==> NO CHANGING ANYTHING EVER!
const phoneType = "pixel 9 pro";
console.log(phoneType);
const userName = "Yoshi";
let userAge = 512;
console.log(userAge);
userAge += 1; // is the same as userAge = userAge + 1
let score = 0;
console.log(userAge);
// let ==> Very flexible, meant to be changed

if (userAge > 512) {
  score = score + 1;
  // userDamage is locally scoped and only exists in this conditional block
  let userDamage = 9000;
  console.log("Score: ", score, "Damage: ", userDamage);
} else {
  console.log("User Age is not greater than 512");
}

// function syntax

// function declarations can be invoked before they are declared
console.log("Addition Function: ", add(100, 22));

function add(a, b) {
  if (isNaN(b) || isNaN(a)) {
    console.error("b or a is not a number");
  }
  return a + b;
}

// Fat arrow functions
const subtract = (a, b) => a - b;

const divide = (a, b) => {
  return a / b;
};

// template literals `` are for mixing text with logic
pageTitle.innerHTML = `The Answer is: <span> ${subtract(10, 5)}</span>`;

stringExample.textContent = "The Division Answer is" + " " + divide(20, 10);

// access with dot notation
const obj = {
  name: "Johnny",
  age: 900,
  email: "johnny@iamsuperold.ca",
};

console.log(obj.name);
// you can change the "properties" of a const if it has them like an object or an array
// access properties of an object with . (dot notation)
stringExample.textContent = obj.name;

// array example

const movies = ["How to train your dragon", "Hook", "Brave"];

// access with [] bracket notation
console.log("Log individual movie: ", movies[0]);

movies.forEach((movie) => console.log("for Each Example: ", movie));
