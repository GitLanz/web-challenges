console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 4;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number!");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000000;
if (numberOfHotdogs <= 5) {
  console.log("Total price: 2.00e/pcs", 2 * numberOfHotdogs, "Euro");
} else if (numberOfHotdogs >= 5 < 100) {
  console.log("Total price (1.50e/pcs):", 1.5 * numberOfHotdogs, "Euro");
} else if (numberOfHotdogs >= 100 < 1000000) {
  console.log("Total price (1.00e/pcs):", 1 * numberOfHotdogs, "Euro");
} else {
  console.log("Total price (0.10e/pcs):", 0.1 * numberOfHotdogs, "Euro");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const coachName = "Coach";
const userName = "Archibald";

// const greeting = "Hello " + "//enter your code here" + "!";
const greeting =
  "Hello " + userName === coachName ? +"!" : "Hello " + userName + "!";

console.log(greeting);
