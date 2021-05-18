'use strict';



/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:01

Write a function called reverseArray which takes an array as an argument.
Without utilizing any of the built-in methods available to your language,
return an array with elements in reversed order.

------------------------------------------------------------------------------------------------ */


function reversArray(arr){
    let localArr = [];
    for(let i =0; i<arr.length;i++){
      localArr.push(arr[arr.length-(i+1)]);
    }
    return localArr;
  }