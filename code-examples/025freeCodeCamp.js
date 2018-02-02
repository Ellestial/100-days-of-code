// GOAL: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var resultArr = [];
  for(var i = 0; i < arr.length; i += size) {
    resultArr.push(arr.slice(i, size + i));
  }
  return resultArr;
}
chunkArrayInGroups([1,2,3,4,5,6], 3);


// GOAL: based on the second parameter, remove that number of array elements from the beginning of the array

function slasher(arr, howMany) {
  var arrResult = [];
  // it doesn't always pay to be first
  
  if(arr.length < howMany) {
    return [];
  }
  arr.forEach(function(el, i) {
    if(arr.indexOf(arr[i + 1]) === howMany) {
      arr.splice(0, howMany);
    }
  });
  return arr;
}
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 10);


// GOAL: remove all falsy values from an array

// Solution 1
function bouncer(arr) {
  var newArr = arr.filter(function(el) {
    if(el !== true) {
      return el;
    }
  });
  return newArr;
}
bouncer([7, NaN, "ate", "", false, 9]);

// Solution 2
function bouncer(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(!arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
bouncer([7, NaN, "ate", "", false, 9]);
