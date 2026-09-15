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

const x = 5;
const y = 10;

console.log(add(x, y));

function add(a, b) {
  if (isNaN(b) || isNaN(a)) {
    console.error("b or a is not a number");
  }
  return a + b;
}

// Fat arrow functions
const subtract = (a, b) => a - b;

const scoreAfterPenalty = subtract(10, 7);

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

/* ------------------array example-------------------*/

const movies = ["How to train your dragon", "Hook", "Brave"];

// access with [] bracket notation
console.log("Log individual movie: ", movies[0]);

movies.forEach((movie) => console.log("for Each Example: ", movie));

// Render to the DOM

// attach to a ul dom node
const ul = document.getElementById("movie-ul");
// for each movie, create a list element and add the list element to a ul
movies.forEach((movie) => {
  //  create a li dom node (?? how do we do this??)
  const li = document.createElement("li");
  // attach to text Content the string information for the element in the array
  li.textContent = movie;
  // push the lis into the ul
  ul.appendChild(li);
});

/* ----------------EVENTS---------------- */
// creat the dom node in js
const logBtn = document.getElementById("log-btn");
const alertBtn = document.getElementById("alert-btn");

function logMsg() {
  console.log("Hello Event Listener");
}
// add an event listener to it for clicks
// when the button is clicked, log a message using a named function
logBtn.addEventListener("click", logMsg);

alertBtn.addEventListener("click", () => {
  alert("Hello Anonymous Function");
});

const printToDom = document.getElementById("print-to-dom");

printToDom.addEventListener("click", () => {
  const pMsg = document.getElementById("node-to-print-to");

  if (pMsg.textContent === "") {
    pMsg.textContent = "I have been printed!!!!";
  } else {
    pMsg.textContent = "";
  }
});
