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
    // solution: 1
    // console.log(userInput.join(' '));

    // solution: 2
    // console.log(userInput[0], userInput[1], userInput[2]);

    // solution: 3
    // let output = '';

    // for (let index in userInput) {
    //     if (index != userInput.length - 1) {
    //         output += userInput[index] + ' ';
    //     } else {
    //         output += userInput[index];
    //     }
    // }

    // console.log(output);

    // let output = '';

    // for (let index in userInput) {
    //     output += userInput[index] + ' ';
    // }

    // console.log(output.trim());

    let output = '';

    for (let index in userInput) index != userInput.length - 1 ? output += userInput[index] + ' ' : output += userInput[index];

    console.log(output);
});