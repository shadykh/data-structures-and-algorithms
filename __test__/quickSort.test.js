'use strict';

const quickSort = require('../Challenges/quickSort/quickSort.js')

/*-----------------------------------------------------------------------------------------------------------*/

describe('Code Challenge: Class 28 : Quick Sort', () => {

    describe('Happy path 😄', () => {

        it('TEST 1 🧪: Can successfully sort an array, trail 1 ?', () => {

            let localArr = [8, 4, 23, 42, 16, 15];

            expect(quickSort(localArr)).toEqual([4, 8, 15, 16, 23, 42]);

        });

        it('TEST 2 🧪: Can successfully sort an array, trail 2 ?', () => {

            let localArr = [20, 18, 12, 8, 5, -2];

            expect(quickSort(localArr)).toEqual([-2, 5, 8, 12, 18, 20]);

        });

        it('TEST 3 🧪: Can successfully sort an array, trail 3 ?', () => {

            let localArr = [5, 12, 7, 9, 4, 7];

            expect(quickSort(localArr)).toEqual([4, 5, 7, 7, 9, 12]);

        });

        it('TEST 4 🧪: Can successfully sort an array, trail 4 ?', () => {

            let localArr = [2, 20, 5, -9, 13, 11];

            expect(quickSort(localArr)).toEqual([-9, 2, 5, 11, 13, 20]);

        });
    });

    describe('Edge cases / custom error ❌', () => {

        it('TEST 1 🧪: Should throw an expectation ⚠️, when passed a null value instead of array !', () => {

            try {
                let localArr = null;
                quickSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 2 🧪: Should throw an expectation ⚠️, when passed an empty value instead of array !', () => {

            try {
                let localArr = '';
                quickSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 3 🧪: Should throw an expectation ⚠️, when passed any type of variable neither an array !', () => {

            try {
                let localArr = 'Edge case Test';
                quickSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });

        it('TEST 4 🧪: Should throw an expectation ⚠️, when passed an empty array !', () => {

            try {
                let localArr = [];
                quickSort(localArr);
            } catch (error) {
                expect(error.message).toBe('⚠️You passed an invalid array⚠️');
            }

        });
    });
});