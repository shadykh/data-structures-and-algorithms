'use strict';

const HT = require('../Challenges/hashTable/hashTable.js');
const leftJoin = require('../Challenges/hashmapLeftJoin/hashmap-left-join.js');


describe('🧪TEST🧪: Code Challenge Class 33 ➡️ Hashmap Left Join', () => {

    let synonym;
    let antonym;
    let noSameData;
    let emptyHashMap;
    synonym = new HT(5);
    synonym.add("fond", "enamored");
    synonym.add("wrath", "anger");
    synonym.add("diligent", "employed");
    synonym.add("outfit", "garb");
    synonym.add("guide", "usher");

    antonym = new HT(5);
    antonym.add("fond", "averse");
    antonym.add("wrath", "delight");
    antonym.add("diligent", "idle");
    antonym.add("guide", "follow");
    antonym.add("flow", "jam");

    noSameData = new HT(1);
    noSameData.add('NoData', 'Null');

    emptyHashMap = new HT(1);

    let expected = [
        ["fond", "enamored", "averse"],
        ["wrath", "anger", 'delight'],
        ["diligent", "employed", "idle"],
        ["outfit", "garb", null],
        ["guide", "usher", "follow"]
    ];

    let expectedNull = [
        ["fond", "enamored", null],
        ["wrath", "anger", null],
        ["diligent", "employed", null],
        ["outfit", "garb", null],
        ["guide", "usher", null]
    ]

    describe('Happy path 😄', () => {


        it('TEST 1 🧪: It should successfully handle a two hashmaps with having some same data', () => {

            expect(leftJoin(synonym, antonym)).toEqual(expected);

        });

        
        it('TEST 2 🧪: It should successfully handle a two hashmaps without having any same data', () => {

            expect(leftJoin(synonym, noSameData)).toEqual(expectedNull);

        });
    });
        describe('Edge cases / custom error ❌', () => {
    
            it('TEST 1 🧪: Should throw an expectation ⚠️, when passed the first tree as empty HashMap !', () => {
    
                try {
                    leftJoin(emptyHashMap, synonym)
                } catch (error) {
                    expect(error.message).toBe('⚠️You pass one or both HashMaps as an empty HashMaps !!!⚠️');
                }
    
            });
    
            it('TEST 2 🧪: Should throw an expectation ⚠️, when passed the second HashMap as empty HashMap !', () => {
    
                try {
                    leftJoin(synonym, emptyHashMap)
                } catch (error) {
                    expect(error.message).toBe('⚠️You pass one or both HashMaps as an empty HashMaps !!!⚠️');
                }
    
            });
    
            it('TEST 3 🧪: Should throw an expectation ⚠️, when passed both HashMaps as empty HashMaps !', () => {
    
                try {
                    leftJoin(emptyHashMap, emptyHashMap);
                } catch (error) {
                    expect(error.message).toBe('⚠️You pass one or both HashMaps as an empty HashMaps !!!⚠️');
                }
    
            });
    
            it('TEST 4 🧪: Should throw an expectation ⚠️, when passed the first HashMap as an invalid value !', () => {
    
                try {
                    leftJoin(null, synonym)
                } catch (error) {
                    expect(error.message).toBe('⚠️You did not pass a valid HashMap !!!⚠️');
                }
    
            });
    
            it('TEST 5 🧪: Should throw an expectation ⚠️, when passed the second HashMap as an invalid value !', () => {
    
                try {
                    leftJoin(synonym, null)
                } catch (error) {
                    expect(error.message).toBe('⚠️You did not pass a valid HashMap !!!⚠️');
                }
    
            });
    
            it('TEST 6 🧪: Should throw an expectation ⚠️, when passed both trees as an invalid values !', () => {
    
                try {
                    leftJoin('', null);
                } catch (error) {
                    expect(error.message).toBe('⚠️You did not pass a valid HashMap !!!⚠️');
                }
    
            });
    
        });
});