// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let inputs = userInput[0].split(' ');
    let a = Number(inputs[0]);
    let b = Number(inputs[1]);
    let c = Number(inputs[2]);

    let x1 = (-b + (((b * b) - (4 * a * c)) ** 0.5)) / (2 * a);
    let x2 = (-b - (((b * b) - (4 * a * c)) ** 0.5)) / (2 * a);

    console.log(x1.toFixed(2));
    console.log(x2.toFixed(2));
});