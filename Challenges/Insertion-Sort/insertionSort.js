'use strict';

function insertionSort (arr){

    if( !arr || typeof(arr) !== 'object' || arr.length === 0 ){
        throw new Error ('⚠️You passed an invalid array⚠️')
    }
    
    for (let i = 1; i < arr.length; i++){

        let j = i-1;
        let temp = arr[i];

        while ((j >= 0) && (temp < arr[j]))
        {
            arr[j+1] = arr[j];
            j = j-1
        }

        arr[j+1] = temp;
    }

    return arr;
}

module.exports = insertionSort;