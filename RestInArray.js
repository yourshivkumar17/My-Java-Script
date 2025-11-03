const fruits = ["apple", "banana", "cherry", "mango", "grapes"];

const [first, second, ...restFruits] = fruits;

console.log(first);
console.log(second);
console.log(restFruits);
