// function isEven(num) {

//   if(num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEven(num) {
  return num % 2 === 0;
}

// function factorial(num) {

//   var result = 1;

//   for(var i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// }

function factorial(num) {

  var result = 1;

  for(var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
// }

// function kebabToSnake(string) {
//   return string.replace(/[-]/g, '_');
// }

function kebabToSnake(string) {
  var newStr = string.replace(/[-]/g, '_');
  return newStr;
}
