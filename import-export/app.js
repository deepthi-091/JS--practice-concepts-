import promptSync from "prompt-sync";
import { add, sub, mul } from "./math.js";
import { greet } from "./loggeruser.js";

const prompt = promptSync();

const username = prompt("Enter your name: ");
greet(username);

console.log("Enter your choice: 0-add, 1-sub, 2-mul");
const choice = parseInt(prompt("Enter your choice: "));

const num1 = parseInt(prompt("Enter num1: "));
const num2 = parseInt(prompt("Enter num2: "));

switch (choice) {
  case 0:
    console.log("Result:", add(num1, num2));
    break;
  case 1:
    console.log("Result:", sub(num1, num2));
    break;
  case 2:
    console.log("Result:", mul(num1, num2));
    break;
  default:
    console.log("Invalid choice");
}
