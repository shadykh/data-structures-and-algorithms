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
