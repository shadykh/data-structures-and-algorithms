'use strict';




/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:03

Write a function called BinarySearch which takes in 2 parameters:
a sorted array and the search key. Without utilizing any of the 
built-in methods available to your language, return the index of 
the array’s element that is equal to the value of the search key,
or -1 if the element is not in the array.

------------------------------------------------------------------------------------------------ */


function binarySearch(arr, num) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {

    let mid = Math.floor((low + high) / 2)
    let numAtMidIndex = arr[mid]

    if (numAtMidIndex === num) {
      return mid
    } else if (numAtMidIndex > num) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1;
}