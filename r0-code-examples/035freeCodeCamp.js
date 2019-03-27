// SUM ALL NUMBERS IN A RANGE
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  var total = 0;
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  for(min; min <= max; min++) {
    total += min;
  }
  return total;
}
sumAll([1, 4]);

// DIFF TWO ARRAYS
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var filterArr = newArr.filter(function(el, i, array) {
    if(!arr1.includes(el) || !arr2.includes(el)) {
      return el;
    }
  });
  // Same, same; but different.
  return filterArr;
}
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// DNA PAIRING
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character.

function pairElement(str) {
  var pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  var arr = str.split('').map(function(el, i, array) {
    return [el, pairs[el]];
  });
  return arr;
}
pairElement("GCG");
