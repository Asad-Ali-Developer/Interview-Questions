// Hoisting example
console.log("Age is: ", age)

var age = 45;

console.log("Age is: ", age)


// Whenever we run the script, the JavaScript first makes the execution context which has two phases:
// 1. Memory Phase
// 2. Code Phase

// Whenever we run the script, the JavaScript engine first looks for all variable and function declarations and moves them to the top of their respective scopes. This is known as "hoisting".
