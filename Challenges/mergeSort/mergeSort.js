'use strict';

function mergeSort(arr) {

    if (!arr || typeof (arr) !== 'object' || arr.length === 0) {
        throw new Error('⚠️You passed an invalid array⚠️')
    }

    let n = arr.length;

    if (n > 1) {

        let mid = Math.floor(n / 2);
        let left = arr.splice(0, mid);
        let right = arr.splice(0);
        console.log('--------------------------');
        console.log('right', right);
        mergeSort(left)
        mergeSort(right)
        merge(left, right, arr)
    }

    return arr;
}

function merge(left, right, arr) {

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {

        if (left[i] <= right[j]) {

            arr[k] = left[i];
            i += 1;

        } else {

            arr[k] = right[j];
            j += 1;

        }

        k += 1;

    }

    if (i === left.length) {

        while (j < right.length) {

            arr[k] = right[j];
            k += 1;
            j += 1;

        }

    } else {

        while (i < left.length) {

            arr[k] = left[i];
            k += 1;
            i += 1;

        }

    }

    return arr
}

module.exports = mergeSort;