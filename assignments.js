let country = "Georgia";
let continent = "Eurasia";
let population = "3 million";

console.log(country, population, continent);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

/* Write your code below. Good luck! 🙂 
BMI = mass / (height * height)
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const name = "Victoria";
const job = "casino dealer";
const futureJob = "programmer";
const birthYear = 1994;
const currentYear = 2024;
const age = currentYear - birthYear;

const victoria = `I'm ${name}, a ${age} years old ${job} trying to become a ${futureJob}! Wish me good luck!`;
console.log(victoria);

console.log(`String
multiple
lines`);

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3); // - operator converts to numbers
console.log("23" + "23" + 3); // + operator converts to strings
console.log("21" * "3"); // * and / operators convers to numbers

let n = "1" + 1; // '11'
n = n - 1; // 11-1;
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //'95'
console.log("10" - "4" - "3" - 2 + "5"); // '15'

// 5 falsy values: 0, ' ', undefined, null, NaN;
// Any number that is not a zero and any string that is not empty will be converted to true.

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true (objects are always true)

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined!");
  // this block of code will be executed, because height variable is undefined.
}

const inputAge = 18;
if (inputAge === 18) console.log("You just became an adult!");
//comparasion operator triple equal is called the strict equality operator, it only returns the truth when both values are exactly the same, exactly the same. It is strict bevause it doesn't perform type coercion.

//loose equality operator is only ==, it actually does type coercion. It can cause bugs and that's why try always to use strict equality operator to write a clean code.

const favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);

const hasDriversLisence = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLisence & hasDriversLisence);

//switch lecture
const day = "monday";
// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan cource structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "tursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend!");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
}

// ternary operator (because it has 3 parts): condition, if part and else part.

const myAge = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2); //same as 2 lines of code above with ternary operator

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

let bill = 275;
let tip;
let totalValue;

/* Write your code below. Good luck! 🙂 */

bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
totalValue = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);
