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


/* ------------------------------------------------------------------------------------------------

Test

I will test the insertShiftArray function by passing those arrays:
 - [4, 8, 15, 16, 23, 42], 15
 - [11, 22, 33, 44, 55, 66, 77], 90
 - [1, 2, 3, 5, 6, 7], 1
 - [0, 0, 0, 0] , 6
 - [null, 0, 1, null, , 6], 0

------------------------------------------------------------------------------------------------ */

describe('CodeChallengeClass3', () => {
  test('It should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 1)).toStrictEqual(0);
    expect(binarySearch([0, 0, 0, 0] , 6)).toStrictEqual(-1);
    expect(binarySearch([null, 0, 1, null, , 6], 0)).toStrictEqual(1);
  });
});