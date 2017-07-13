// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Arithmetic Operators


// 1. solution by using recursion
// function factorialize(num) {
//   if(num === 0) return 1;
//
//   return factorialize(num - 1) * num;
// }
//
// factorialize(5);

// 2. solution by using for loop
function factorialize(num) {
  let temp = 1;

  for(let i = num; i > 0; i--) {
    temp *= i;
  }
  return temp;
}

factorialize(5);
