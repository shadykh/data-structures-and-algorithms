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


Testing

- Can successfully instantiate an empty linked list?
- Can properly insert into the linked list?
- The head property will properly point to the first node in the linked list?
- Can properly insert multiple nodes into the linked list?
- Will return true when finding a value within the linked list that exists?
- Will return false when searching for a value in the linked list that does not exist?
- Can properly return a collection of all the values that exist in the linked list?
- If insert not valid value in insert method!
- If insert not valid value in includes method!
- If pass a value as an argument in toString method!
- If the linkedList is empty and called toString method!

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


describe('Throw a custom errors / edge cases', () => {

    it('TEST 1 🧪: If insert not valid value in insert method, to throw error ---> ⚠️You did not insert any valid value !!!⚠️', () => {

        let newLinkedList = new LinkedList();
        let value;

        expect(newLinkedList.insert).toThrow(('⚠️You did not insert any valid value !!!⚠️'));

    });

    
    it('TEST 2 🧪: If insert not valid value in includes method, to throw error ---> ⚠️You did not insert any valid value !!!⚠️', () => {

        let newLinkedList = new LinkedList();
        let value;

        expect(newLinkedList.includes).toThrow(('⚠️You did not insert any valid value !!!⚠️'));

    });

    it('TEST 3 🧪: If pass a value as an argument in toString method !', () => {

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