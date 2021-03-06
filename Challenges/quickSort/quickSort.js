'use strict';

function quickSort(arr, left, right) {

    if (!arr || typeof (arr) !== 'object' || arr.length === 0) {
        throw new Error('⚠️You passed an invalid array⚠️')
    }

    left = left || 0;
    right = right || arr.length - 1;

  if (left < right) {
    
    let position = partition(arr, left, right);

  
    quickSort(arr, left, position - 1);
   
    quickSort(arr, position + 1, right);
    
  }

  return arr;
}

function partition(arr, left, right) {
  
  let pivot = arr[right];

 
  let low = left - 1;

  for (let i = left; i < right; i++) {

    if (arr[i] <= pivot) {

      low += 1;

      swap(arr, i, low);

    }

  }

  swap(arr, right, low + 1);


  return low + 1;

}

function swap(arr, i, low) {

  let temp = arr[i];

  arr[i] = arr[low];
  arr[low] = temp;

}

module.exports = quickSort;