'use strict';


const Node = require('../Data-Structures/JavaScript/linkedList/node.js');
const LinkedList = require('../Data-Structures/JavaScript/linkedList/linked-list.js');
const { expect } = require('@jest/globals');

/* ------------------------------------------------------------------------------------------------

Code Challenge => Class:05

Define those methods:
*insert: 
    which takes any value as an argument
    and adds a new node with that value to the head of the
    list with an O(1) Time performance.
*includes:
    which takes any value as an argument and returns
    a boolean result depending on whether that value exists
    as a Node’s value somewhere within the list.
*toString:
    which takes in no arguments and returns a string
    representing all the values in the Linked List, formatted as:
        ?-> { a } -> { b } -> { c } -> NULL
! v1.1.6
*append: 
    which adds a new node with the given value
    to the end of the list
*insertBefore:
    which add a new node with the given newValue 
    immediately before the first value node
 *insertAfter:
    which add a new node with the given newValue
    immediately after the first value node
*kthFromEnd: 
    Write a method for the Linked List class which 
    takes a number, k, as a parameter. Return the node’s
    value that is k from the end of the linked list. You 
    have access to the Node class and all the properties on
    the Linked List class as well as the methods created in
    previous challenges.

Testing
* v1.1.5
- Can successfully instantiate an empty linked list?
- Can properly insert into the linked list?
- The head property will properly point to the first node in the linked list?
- Can properly insert multiple nodes into the linked list?
- Will return true when finding a value within the linked list that exists?
- Will return false when searching for a value in the linked list that does not exist?
- Can properly return a collection of all the values that exist in the linked list?
- Edge cases / custom error:
    - If insert not valid value in insert method!
    - If insert not valid value in includes method!
    - If pass a value as an argument in toString method!
    - If the linkedList is empty and called toString method!
* v1.1.6
- Can successfully add a node to the end of the linked list
- Can successfully add multiple nodes to the end of a linked list
- Can successfully insert a node before a node located i the middle of a linked list
- Can successfully insert a node before the first node of a linked list
- Can successfully insert after a node in the middle of the linked lis
- Can successfully insert a node after the last node of the linked list
- Edge cases / custom error:
    - If pass not valid value in append method
    - If pass not valid value in insertAfter method
    - If pass not valid value in insertBefore method
* v1.1.7
- Where k is greater than the length of the linked list ?
- Where k and the length of the list are the same ?
- Where k is not a positive integer ?
- Where the linked list is of a size 1 ?
- “Happy Path” where k is not at the end, but somewhere in the middle of the linked list ?
- Edge cases / custom error:
    - If pass a null value in kthFromEnd method
    - If pass an empty value in kthFromEnd method
    - If pass a string value in kthFromEnd method

------------------------------------------------------------------------------------------------ */

describe('Code Challenge: Class 05: Linked List Implementation', () => {

    it('TEST 1 🧪: Can successfully instantiate an empty linked list ?', () => {

        let newLinkedList = new LinkedList();

        expect(newLinkedList.head).toBeNull();

    });

    it('TEST 2 🧪: Can properly insert into the linked list ?', () => {

        let newLinkedList = new LinkedList();
        let value = 10;

        newLinkedList.insert(value);

        expect(newLinkedList.head.value).toEqual(value);
        expect(newLinkedList.head.next).toBeNull();
    });

    it('TEST 3 🧪: The head property will properly point to the first node in the linked list ? *We inserted two values, and when call head property it should be equal to the last value added which it is the head ', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);

        expect(newLinkedList.head.value).toEqual(secondValue);
    });

    it('TEST 4 🧪: Can properly insert multiple nodes into the linked list ? *We inserted two nodes, and check them. ', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);

        expect(newLinkedList.head.value).toEqual(secondValue);
        expect(newLinkedList.head.next.value).toEqual(firstValue);
    });

    it('TEST 5 🧪: Will return true when finding a value within the linked list that exists ?', () => {

        let newLinkedList = new LinkedList();
        let value = 10;

        newLinkedList.insert(value);

        expect(newLinkedList.includes(value)).toEqual(true);

    });
    
    it('TEST 6 🧪: Will return false when searching for a value in the linked list that does not exist  ?', () => {

        let newLinkedList = new LinkedList();
        let value = 10;

        newLinkedList.insert(value);

        expect(newLinkedList.includes(20)).toEqual(false);

    });

    it('TEST 7 🧪: Can properly return a collection of all the values that exist in the linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 30;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        expect(newLinkedList.toString()).toEqual('{ 30 } -> { 20 } -> { 10 } -> NULL');

    });
});


describe('Code Challenge: Class 05: Throw a custom errors / edge cases', () => {

    it('TEST 1 🧪: If pass a not valid value in an insert method, to throw error ---> ⚠️You did not pass any valid value !!!⚠️', () => {

        let newLinkedList = new LinkedList();
        let value = null;

        try {
            newLinkedList.insert(value);
        } catch (error) {
            expect(error.message).toBe("⚠️You did not pass any valid value !!!⚠️");
        }

    });

    
    it('TEST 2 🧪: If pass a not valid value in an includes method, to throw error ---> ⚠️You did not pass any valid value !!!⚠️', () => {

        let newLinkedList = new LinkedList();
        let value = null;

        try {
            newLinkedList.includes(value);
        } catch (error) {
            expect(error.message).toBe("⚠️You did not pass any valid value !!!⚠️");
        }

    });

    it('TEST 3 🧪: If pass a value as an paramter in toString method !', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 30;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        expect(newLinkedList.toString(null)).toEqual('{ 30 } -> { 20 } -> { 10 } -> NULL');

    });

    it('TEST 4 🧪: If the linkedList is empty and called toString method !', () => {

        let newLinkedList = new LinkedList();

        expect(newLinkedList.toString()).toEqual('NULL');

    });
});


describe('Code Challenge: Class 06: Linked List Implementation', () => {

    
    it('TEST 1 🧪: Can successfully add a node to the end of the linked list ?', () => {

        let newLinkedList = new LinkedList();
        let value = 10;

        newLinkedList.append(value);

        expect(newLinkedList.toString()).toEqual('{ 10 } -> NULL');

    });

    it('TEST 2 🧪: Can successfully add multiple nodes to the end of a linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;

        newLinkedList.append(firstValue);
        newLinkedList.append(secondValue);

        expect(newLinkedList.toString()).toEqual('{ 10 } -> { 20 } -> NULL');
    });

    it('TEST 3 🧪: Can successfully insert a node before a node located in the middle of a linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 1;
        let value = 99;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        newLinkedList.insertBefore(secondValue, value);

        expect(newLinkedList.toString()).toEqual('{ 1 } -> { 99 } -> { 20 } -> { 10 } -> NULL');
    });

    it('TEST 4 🧪: Can successfully insert a node before the first node of a linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let value = 99;

        newLinkedList.insert(firstValue);

        newLinkedList.insertBefore(firstValue, value);

        expect(newLinkedList.toString()).toEqual('{ 99 } -> { 10 } -> NULL');
    });

    it('TEST 5 🧪: Can successfully insert after a node in the middle of the linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 1;
        let value = 99;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        newLinkedList.insertAfter(secondValue, value);

        expect(newLinkedList.toString()).toEqual('{ 1 } -> { 20 } -> { 99 } -> { 10 } -> NULL');

    });
    
    it('TEST 6 🧪: Can successfully insert a node after the last node of the linked list ?', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let value = 99;

        newLinkedList.insert(firstValue);

        newLinkedList.insertBefore(firstValue, value);

        expect(newLinkedList.toString()).toEqual('{ 99 } -> { 10 } -> NULL');

    });

    
});


describe('Code Challenge: Class 06: Throw a custom errors / edge cases', () => {

    it('TEST 1 🧪: If pass not valid value in an append method, to throw error ---> ⚠️You did not pass any valid value !!!⚠️', () => {

        let newLinkedList = new LinkedList();
        let value = null;

        try {
            newLinkedList.append(value);
        } catch (error) {
            expect(error.message).toBe("⚠️You did not pass any valid value !!!⚠️");
        }
    });

    
    it('TEST 2 🧪: If pass not valid value in an insertBefore method, to throw error ---> ⚠️You did not pass any valid value !!!⚠️', () => {
        
        let newLinkedList = new LinkedList();
        let value = null;
        let newValue = null;

        try {
            newLinkedList.insertBefore(value, newValue);
        } catch (error) {
            expect(error.message).toBe("⚠️You did not pass any valid value !!!⚠️");
        }

    });

    it('TEST 3 🧪: If pass not valid value in an insertAfter method, to throw error ---> ⚠️You did not pass any valid value !!!⚠️', () => {
        
        let newLinkedList = new LinkedList();
        let value = null;
        let newValue = null;

        try {
            newLinkedList.insertAfter(value, newValue);
        } catch (error) {
            expect(error.message).toBe("⚠️You did not pass any valid value !!!⚠️");
        }

    });
});


describe('Code Challenge: Class 07', () => {

    it('TEST 1 🧪: Should return the value without any error when it is in the range of the linkedList! [“Happy Path”]', () => {

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 1;
        let k = 0;

        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        expect(newLinkedList.kthFromEnd(k)).toEqual(10);

    });

    it('TEST 2 🧪: Should return error [Where k is greater than the length of the linked list] => ⚠️The value ${k} is Greater than the linkedList Length⚠️', () => {
        let k = 4;
        try {
            let newLinkedList = new LinkedList();
            let firstValue = 10;
            let secondValue = 20;
            let thirdValue = 1;
    
            newLinkedList.insert(firstValue);
            newLinkedList.insert(secondValue);
            newLinkedList.insert(thirdValue);
            newLinkedList.kthFromEnd(k);
        } catch (error) {
            expect(error.message).toBe(`⚠️The value ${k} is Greater than the linkedList Length⚠️`);
        }

    });

    it('TEST 3 🧪: Should return the value without any error  [Where k and the length of the list are the same ?] => ⚠️The value ${k} is Greater than the linkedList Length⚠️', () => {
        
        let k = 3;

        let newLinkedList = new LinkedList();
        let firstValue = 10;
        let secondValue = 20;
        let thirdValue = 1;
    
        newLinkedList.insert(firstValue);
        newLinkedList.insert(secondValue);
        newLinkedList.insert(thirdValue);

        expect(newLinkedList.kthFromEnd(k)).toEqual(1);

    });

    it('TEST 4 🧪: Should return error [Where k is not a positive integer ?] => ⚠️The value ${k} is not a positive integer⚠️', () => {
        let k = -3;
        try {
            let newLinkedList = new LinkedList();
            let firstValue = 10;
            let secondValue = 20;
            let thirdValue = 1;
    
            newLinkedList.insert(firstValue);
            newLinkedList.insert(secondValue);
            newLinkedList.insert(thirdValue);
            newLinkedList.kthFromEnd(k);
        } catch (error) {
            expect(error.message).toBe(`⚠️The value ${k} is not a positive integer⚠️`);
        }

    });

    it('TEST 5 🧪: Should return the value without any error [Where the linked list is of a size 1] => ⚠️The value ${k} is Greater than the linkedList Length⚠️', () => {
        let k = 1;

        let newLinkedList = new LinkedList();
        let firstValue = 10;
    
        newLinkedList.insert(firstValue);

        expect(newLinkedList.kthFromEnd(k)).toEqual(10);
    });
    
});


describe('Code Challenge: Class 07: Throw a custom errors / edge cases', () => {

    it('TEST 1 🧪: Should return error [Where k is not a valid value {null} ?] => ⚠️The value of k is not a valid value⚠️', () => {

        let k = null;
        try {
            let newLinkedList = new LinkedList();
            let firstValue = 10;
    
            newLinkedList.insert(firstValue);

            newLinkedList.kthFromEnd(k);
        } catch (error) {
            expect(error.message).toBe(`⚠️The value of k is not a valid value⚠️`);
        }

    });

    it('TEST 2 🧪: Should return error [Where k is not a valid value {empty} ?] => ⚠️The value of k is not a valid value⚠️', () => {

        let k = '';
        try {
            let newLinkedList = new LinkedList();
            let firstValue = 10;
    
            newLinkedList.insert(firstValue);

            newLinkedList.kthFromEnd(k);
        } catch (error) {
            expect(error.message).toBe(`⚠️The value of k is not a valid value⚠️`);
        }

    });

    it('TEST 3 🧪: Should return error [Where k is not a valid value {string} ?] => ⚠️The value of k is not a valid value⚠️', () => {

        let k = 'null';
        try {
            let newLinkedList = new LinkedList();
            let firstValue = 10;
    
            newLinkedList.insert(firstValue);

            newLinkedList.kthFromEnd(k);
        } catch (error) {
            expect(error.message).toBe(`⚠️The value of k is not a valid value⚠️`);
        }

    });
});