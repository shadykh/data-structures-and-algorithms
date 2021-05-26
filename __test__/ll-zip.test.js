'use strict';

const node = require('../Data-Structures/JavaScript/linkedList/node.js');

const LinkedList = require("../Data-Structures/JavaScript/linkedList/linked-list.js");

const zipLists = require('../Challenges/llZip/ll-zip.js')



/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:08

Write a function called zipLists which takes 
two linked lists as arguments. Zip the two linked
lists together into one so that the nodes alternate
between the two lists and return a reference to the
head of the zipped list. Try and keep additional space
down to O(1). You have access to the Node class and all
the properties on the Linked List class as well as the
methods created in previous challenges.

------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------

Test
- Happy path 😄:
  - two valid linkedList and should return the zipped version of them
    - [1, 3, 2] ⚡ [5, 9, 4] ➡️ [1, 5, 3, 9, 4, 2]

- Edge cases:
  - Passing first one as a null linkedList:
    - null, [5, 9, 4]
  - Passing second one as a null linkedList:
    -[1, 3, 2], null
  - Passing both of them as a null linkedList:
    -null, null
  - Passing first one as an empty linkedList:
    - '', [5, 9, 4]
  - Passing second one as an empty linkedList:
    -[1, 3, 2], ''
  - Passing both of them as an empty linkedList:
    -'', ''

------------------------------------------------------------------------------------------------ */

describe('TEST: Code Challenge Class 02 ', () => {

  test('TEST 1 🧪: It should return the zipped version of the two linkedLists', () => {

    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList1.append(v1).append(v2).append(v3);
    linkedList2.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    expect(newZippedList.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');

  });

  test('TEST 2 🧪: It should return the zipped version of the two linkedLists. [even if the second one is empty, should return the first one]', () => {

    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList1.append(v1).append(v2).append(v3);
    //linkedList2.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    expect(newZippedList.toString()).toEqual('{ 1 } -> { 3 } -> { 2 } -> NULL');

  });

  test('TEST 3 🧪:It should return the zipped version of the two linkedLists. [even if the first one is empty, should return the second one]', () => {

    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    //linkedList1.append(v1).append(v2).append(v3);
    linkedList2.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    expect(newZippedList.toString()).toEqual('{ 5 } -> { 9 } -> { 4 } -> NULL');

  });

  test('TEST 4 🧪:It should throw an error, if the first list is null [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList1 = null;
    let linkedList2 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList2.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }


  });

  test('TEST 5 🧪:It should throw an error, if the second list is null [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList2 = null;
    let linkedList1 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList1.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }

  });

  test('TEST 6 🧪:It should throw an error, if the both of the lists are null [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList2 = null;
    let linkedList1 = null;

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }

  });

  test('TEST 7 🧪:It should throw an error, if the first list is empty [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList1 = '';
    let linkedList2 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList2.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }


  });

  test('TEST 8 🧪:It should throw an error, if the second list is empty [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList2 = '';
    let linkedList1 = new LinkedList();

    let [v1, v2, v3, v4, v5, v6] = [1, 3, 2, 5, 9, 4];

    linkedList1.append(v4).append(v5).append(v6);

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }

  });

  test('TEST 9 🧪:It should throw an error, if the both of the lists are empty [⚠️You did not insert any/only one valid value !!!⚠️]', () => {

    try {
        
    let linkedList2 = '';
    let linkedList1 = '';

    let newZippedList = zipLists(linkedList1, linkedList2);

    } catch (error) {
        expect(error.message).toBe("⚠️You did not insert any/only one valid value !!!⚠️");
    }

  });


});