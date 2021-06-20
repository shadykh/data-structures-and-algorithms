'use strict';

const insertionSort = require('../Challenges/Insertion-Sort/insertionSort.js')

/*-----------------------------------------------------------------------------------------------------------*/

describe('Code Challenge: Class 26 : Insertion Sort', () => {

    describe('Happy path 😄', () => {

        it('TEST 1 🧪: Can successfully sort an array, trail 1 ?', () => {

            let localArr = [8, 4, 23, 42, 16, 15];

            expect(insertionSort(localArr)).toEqual([4, 8, 15, 16, 23, 42]);

        });

        it('TEST 2 🧪: Can successfully sort an array, trail 2 ?', () => {

            let localArr = [20, 18, 12, 8, 5, -2];

            expect(insertionSort(localArr)).toEqual([-2, 5, 8, 12, 18, 20]);

        });

        it('TEST 3 🧪: Can successfully sort an array, trail 3 ?', () => {

            let localArr = [5, 12, 7, 5, 5, 7];

            expect(insertionSort(localArr)).toEqual([5, 5, 5, 7, 7, 12]);

        });

        it('TEST 4 🧪: Can successfully sort an array, trail 4 ?', () => {

            let localArr = [2, 3, 5, 7, 13, 11];

            expect(insertionSort(localArr)).toEqual([2, 3, 5, 7, 11, 13]);

        });
    });

    describe('Edge cases / custom error ❌', () => {

        it('TEST 1 🧪: Should throw an expectation ⚠️, when passed a null value instead of array !', () => {

            try {
                let localArr = null;
                insertionSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 2 🧪: Should throw an expectation ⚠️, when passed an empty value instead of array !', () => {

            try {
                let localArr = '';
                insertionSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 3 🧪: Should throw an expectation ⚠️, when passed any type of variable neither an array !', () => {

            try {
                let localArr = 'Edge case Test';
                insertionSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 4 🧪: Should throw an expectation ⚠️, when passed an empty array !', () => {

            try {
                let localArr = [];
                insertionSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });
    });
});