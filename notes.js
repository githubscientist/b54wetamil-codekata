// /*
//     Input and Output:

//         Sathish: 1, 2, 3
//         Students: 2, 3, 4, 6
// */

// let numbers = [1, 2, 3, 4, 5, 6];

// // to print the entire array
// // console.log(numbers);

// // to print a specific value from the array
// // console.log(numbers[5]);

// // to change a value at an index
// // numbers[0] = 10;

// // console.log(numbers);

// // to add a value into the array

// // to push a value to the end of the array
// numbers.push(8);

// numbers.push(9, 10);

// // to push a value to the beginning of the array
// numbers.unshift(0);

// numbers.unshift(-2, -1);

// // to delete the last element of the array
// numbers.pop();
// numbers.pop();

// // to delete the first element of the array
// numbers.shift();
// numbers.shift();

// // to push an element at any index
// numbers.splice(7, 0, 6.8);

// // to remove an element from any index
// numbers.splice(2, 1);
// numbers.splice(6, 1);

// // console.log(numbers);

// console.log(numbers.slice(1, 4));

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name? ', (answer) => {
//     console.log(`Hello, ${answer}!, pleased to meet you!`);
//     rl.close();
// });

// let numbers = [1, 2, 3, 4, 5];
// let value = numbers.join(' ');

// console.log(value, typeof(value));

// let sentence = `apple@123 is a fruit`;

// console.log(sentence[9]);

// console.log(sentence.slice(0, 9));

// console.log(sentence.split('@'));

// console.log(sentence.split(' ').join(', '));

let numbers = [33, 22, 12, 56, 34];

// console.log(numbers.length);

// for loop
// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }


// for loop
// let index = 0;
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++;
// }

// // while loop
// let index = 0;
// while ( index < numbers.length ){
//     console.log(numbers[index]);
//     index++;
// }

// do...while loop
// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// // for...in loop
// for (let index in numbers){
//     console.log(numbers[index]);
// }

// // for...of loop
// for (let value of numbers){
//     console.log(value);
// }