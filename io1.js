// Getting input via STDIN
const rl = require("readline");

const inp = rl.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    console.log(userInput[0]);
});