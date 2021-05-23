'use strict';



/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:01

Write a function called reverseArray which takes an array as an argument.
Without utilizing any of the built-in methods available to your language,
return an array with elements in reversed order.

------------------------------------------------------------------------------------------------ */


function reversArray(arr){

  if(!arr || typeof(arr)=== 'string'){
    throw new Error('⚠️You did not insert any valid value !!!⚠️');
  }

  let localArr = [];
  for(let i =0; i<arr.length;i++){
    localArr.push(arr[arr.length-(i+1)]);
  }
  return localArr;
}


/* ------------------------------------------------------------------------------------------------

Test

- Standards inputs:
  - [1, 2, 3]
  - [50, 50, 12, 0]
  - [[2, 3], [4, 5], [6, 7]]
  - [0, 0 , 0, 0]
  - [null, 0, 1, null, , 6]
- Edge cases
  - passing an empty array
    - []
  - passing a null
    - null
  - passing a string instead of array
    - 'test'
------------------------------------------------------------------------------------------------ */

describe('Code Challenge Class 01', () => {
  test('TEST 1 🧪: It should return the same array but in reversed order', () => {
    expect(reversArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
    expect(reversArray([50, 50, 12, 0])).toStrictEqual([0, 12, 50, 50]);
    expect(reversArray([[2, 3], [4, 5], [6, 7]])).toStrictEqual([[6, 7], [4, 5], [2, 3]]);
    expect(reversArray([0, 0 , 0, 0])).toStrictEqual([0, 0 , 0, 0]);
    expect(reversArray([null, 0, 1, null, , 6])).toEqual([6, , null, 1, 0, null]);
  });

  test('TEST 2 🧪: Edge cases', () => {

    try {
      reversArray([]);
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      reversArray(null)
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      reversArray('test')
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

  });
});