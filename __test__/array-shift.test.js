'use strict';



/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:02

Write a function called insertShiftArray which takes in an array
and a value to be added. Without utilizing any of the built-in methods
available to your language, return an array with the new value added
at the middle index.

------------------------------------------------------------------------------------------------ */


function insertShiftArray(arr, num){
  
  if(!arr || !num || typeof(arr)=== 'string'){
    throw new Error('⚠️You did not insert any valid value !!!⚠️');
  }

  let localArr = [];
  let midIndex = Math.ceil(arr.length/2);
   for(let i =0; i<arr.length;i++){
     if (i === midIndex){
       localArr.push(num);
       localArr.push(arr[i]);
     }else{
        localArr.push(arr[i]);
     }
    
  }
  return localArr;
}



/* ------------------------------------------------------------------------------------------------

Test
- Standers test:
  - [1, 2, 3], 5
  - [42,8,15,23,42], 16
  - [[2, 3], [4, 5], [6, 7]], 20
  - [0, 0 , 0, 0], 4
  - [null, 0, 1, null, , 6], 36

- Edge cases:
  - Passing empty array:
    - [], 2
  - Passing a null/empty parameters:
    - null, null
    - [], null
    - [1, 2], null
  - Passing a string instead of array:
    - 'Test', 2    

------------------------------------------------------------------------------------------------ */

describe('TEST: Code Challenge Class 02 ', () => {

  test('TEST 1 🧪: It should return the same array but added the number in the middle', () => {

    expect(insertShiftArray([1, 2, 3], 5)).toStrictEqual([ 1, 2, 5, 3 ]);
    expect(insertShiftArray([42,8,15,23,42], 16)).toStrictEqual([ 42, 8, 15, 16, 23, 42 ]);
    expect(insertShiftArray([[2, 3], [4, 5], [6, 7]], 20)).toStrictEqual([[ 2, 3 ], [ 4, 5 ], 20, [ 6, 7 ]]);
    expect(insertShiftArray([0, 0 , 0, 0], 4)).toStrictEqual([ 0, 0, 4, 0, 0 ]);
    expect(insertShiftArray([null, 0, 1, null, , 6], 36)).toEqual([ null, 0, 1, 36, null, , 6 ]);

  });

  test('TEST 2 🧪: Edge cases', () => {

    try {
      insertShiftArray([], 2);
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      insertShiftArray(null, null)
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      insertShiftArray([], null)
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      insertShiftArray([1, 2], null)
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

    try {
      insertShiftArray('Test', 2)
    } catch (e) {
      expect(e.message).toBe("⚠️You did not insert any valid value !!!⚠️");
    }

  });

});