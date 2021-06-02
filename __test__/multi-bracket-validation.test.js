'use strict';

const multiBracketValidation = require('../Challenges/multiBracketValidation/multi-bracket-validation.js');


/* ------------------------------------------------------------------------------------------------

Test
- multiBracketValidation
    - Should return true in the following cases
        - Matching Curly Brackets
        - Matching Round Brackets
        - Matching Square Brackets
        - Matching Brackets in mixing brackets string
        - Matching Brackets in mixing brackets with other strings characters 
    - Should return false in the following cases
        - Missing one closing bracket
        - Only opening brackets
        - Only closing brackets
        - Only one side bracket [one character]

- Edge cases:
    - Passing a null value to enqueue:
        - null
    - Passing an empty value to enqueue:
        -''
    - Passing a non-string value!
        - 55


------------------------------------------------------------------------------------------------ */

describe('Code Challenge Class 13', () => {
    describe('It Should return true in the following cases', () => {
        test('TEST 1 🧪: Matching Curly Brackets ', () => {
            expect(multiBracketValidation('{}')).toStrictEqual(true);
        })
        test('TEST 2 🧪: Matching Round Brackets ', () => {
            expect(multiBracketValidation('()')).toStrictEqual(true);
        })
        test('TEST 3 🧪: Matching Square Brackets ', () => {
            expect(multiBracketValidation('[]')).toStrictEqual(true);
        })
        test('TEST 4 🧪: Matching Brackets in mixing brackets string ', () => {
            expect(multiBracketValidation('{}(){}')).toStrictEqual(true);
        })
        test('TEST 5 🧪: Matching Brackets in mixing brackets with other strings characters ', () => {
            expect(multiBracketValidation('{}{Code}[Fellows](())')).toStrictEqual(true);
        })
    })
    describe('It Should return false in the following cases', () => {
        test('TEST 1 🧪: Missing one closing bracket ', () => {
            expect(multiBracketValidation('[({}]')).toStrictEqual(false);
        })
        test('TEST 2 🧪: Only opening brackets ', () => {
            expect(multiBracketValidation('({[')).toStrictEqual(false);
        })
        test('TEST 3 🧪: Only closing brackets', () => {
            expect(multiBracketValidation(')}]')).toStrictEqual(false);
        })
        test('TEST 4 🧪: Only one side bracket [one character] ', () => {
            expect(multiBracketValidation('{')).toStrictEqual(false);
        })
        test('TEST 5 🧪: Grading TEST [{}{Code}[Fellows]([()})] to be false ', () => {
            expect(multiBracketValidation('{}{Code}[Fellows]([()})')).toStrictEqual(false);
        })
    })
    describe('Edge Cases/ Custom Errors', () => {
        test('TEST 1 🧪: Passing a null value! ', () => {
            try {
                multiBracketValidation(null);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            }
        })
        test('TEST 2 🧪: Passing an empty value! ', () => {
            try {
                multiBracketValidation('');
            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            }
        })
        test('TEST 3 🧪: Passing a non-string value! ', () => {
            try {
                multiBracketValidation(55);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not string.⚠️')
            }
        })
    })
})