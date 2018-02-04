// CHALLENGE
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  var lowestIndex;
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  
  arr.map(function(el, i) {
     if(el < num) {
      lowestIndex = i + 1;
    } else if(el === num) {
      lowestIndex = i;
    }
  });
  return lowestIndex;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
