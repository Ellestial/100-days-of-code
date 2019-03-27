////////////////////
// REVERSE METHOD //
////////////////////
function printReverse(arr) {
  var reverseArr = [];

  arr.forEach(function(element) {
    reverseArr.unshift(element);
  });

  return reverseArr;
};

printReverse(["a", "b", "c", "d"]);


////////////////////
// UNIFORM METHOD //
////////////////////
function isUniform(arr) {
  var firstIndex = arr[0];

  for(var i = 1; i < arr.length; i++) {

    if(arr[i] !== firstIndex) {
      return false;
    }
  }

  // arr.forEach(function(element) { <-- using forEach() doesn't work here because the return only closes this function, not the overarching one.

  //   if(element !== firstIndex) {
  //     return false;
  //   }
  // });

  return true;
};

isUniform([1, 1, 1, 2]);
isUniform([1, 1, 1, 1]);


////////////////////
// ADDING  METHOD //
////////////////////
function sumArray(arr) {
  var result = 0;

  arr.forEach(function(element) {
    result += element;
  });

  return result;
};

sumArray([2, 6, 2]);


////////////////////
//   MAX METHOD   //
////////////////////
function max(arr) {
  var result = arr[0];

  arr.forEach(function(element) {

    if(element > result) {
      result = element;
    }
  });

  return result;
};

max([1, 44, 43]);
