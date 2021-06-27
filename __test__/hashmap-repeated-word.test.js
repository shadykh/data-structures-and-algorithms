'use strict';

const hashmapRepeatedWord = require('../Challenges/hashmapRepeatedWord/hashmap-repeated-word.js');

describe('🧪TEST🧪: Code Challenge Class 31 ➡️ hashmap Repeated Word', () => {

    describe('Happy path 😄', () => {


        it('TEST 1 🧪: It should successfully handle a string with one repeat', () => {

            expect(hashmapRepeatedWord('Here you will find one one repeat !')).toBe('one');

        });

        it('TEST 2 🧪: It should successfully handle a string with multiple repeats', () => {

            expect(hashmapRepeatedWord('Here :) you will :) find multiple repeats :) !')).toBe(':)');

        });

        it('TEST 3 🧪: It should successfully handle a string with no repeat', () => {

            expect(hashmapRepeatedWord('Here you will not find any repeat !')).toBe('There is not any repeated words');

        });

    });

    describe('Edge cases / custom error ❌', () => {

        it('TEST 1 🧪: Should throw an expectation ⚠️, when passed a null value instead of string !', () => {

            try {
                hashmapRepeatedWord(null);
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid string !!!⚠️');
            }

        });

        it('TEST 2 🧪: Should throw an expectation ⚠️, when passed an empty string !', () => {

            try {
                hashmapRepeatedWord('');
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid string !!!⚠️');
            }

        });

    });
});