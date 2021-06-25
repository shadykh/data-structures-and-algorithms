'use strict';

const HashTable = require('../Challenges/hashTable/hashTable.js');

const hashTable = new HashTable(10);

hashTable.add('Test', 'yes');
hashTable.add('Test', 'no');

describe('🧪TEST🧪: Code Challenge Class 30 ➡️ Hashtable', () => {

    describe('Happy path 😄', () => {

        it('TEST 1 🧪: Adding a key/value to your hashtable results in the value being in the data structure', () => {

            hashTable.add('Test 1', 'no');

            expect(hashTable.contains('Test 1')).toEqual(true);

        });

        it('TEST 2 🧪: Retrieving based on a key returns the value stored', () => {

            hashTable.add('Test 2', 8)

            expect(hashTable.get('Test 2')).toEqual(['Test 2', 8])

        });

        it('TEST 3 🧪: Successfully returns null for a key that does not exist in the hashtable', () => {

            expect(hashTable.contains('RandomTest')).toBe(false);

        });

        it('TEST 4 🧪: Successfully handle a collision within the hashtable', () => {

            expect(hashTable.contains('Test')).toEqual(true);

        });

        it('TEST 5 🧪: Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

            expect(hashTable.contains('Test')).toEqual(true);

        });

        it('TEST 6 🧪: Successfully hash a key to an in-range value', () => {

            expect(hashTable.hash('Test')).toEqual(6);

        });

    });

    describe('Edge cases / custom error ❌', () => {

        it('TEST 1 🧪: Should throw an expectation ⚠️, when passed a null value instead of size !', () => {

            try {
                const hashTable = new HashTable(null);
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });

        it('TEST 2 🧪: Should throw an expectation ⚠️, when passed an empty value instead of size !', () => {

            try {
                const hashTable = new HashTable('');
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });

        it('TEST 3 🧪: Should throw an expectation ⚠️, when passed a string value instead of size !', () => {

            try {
                const hashTable = new HashTable('String');
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });

        it('TEST 4 🧪: Should throw an expectation ⚠️, when passed an invalid value in add() method!', () => {

            try {
                hashTable.add(null, 'null');
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });
        
        it('TEST 5 🧪: Should throw an expectation ⚠️, when passed an invalid value in get() method!', () => {

            try {
                hashTable.get(null);
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });
                
        it('TEST 6 🧪: Should throw an expectation ⚠️, when passed an invalid value in contains() method!', () => {

            try {
                hashTable.contains(null);
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid value !!!⚠️');
            }

        });
        
    });
});