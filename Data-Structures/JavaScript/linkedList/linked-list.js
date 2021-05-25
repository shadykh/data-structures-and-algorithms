'use strict';

/**
 * require the node for the linked-list
 */

const Node = require('./node.js');


/**
 * ! v1.1.5
 * *insert: 
 *      which takes any value as an argument
 *      and adds a new node with that value to the head of the
 *      list with an O(1) Time performance.
 * *includes:
 *      which takes any value as an argument and returns
 *      a boolean result depending on whether that value exists
 *      as a Node’s value somewhere within the list.
 *  * toString:
 *      which takes in no arguments and returns a string
 *      representing all the values in the Linked List, formatted as:
 *          ?-> { a } -> { b } -> { c } -> NULL
 * ! v1.1.6
 *  *append: 
 *      which adds a new node with the given value
 *      to the end of the list
 * *insertBefore:
 *      which add a new node with the given newValue 
 *      immediately before the first value node
 *  *insertAfter:
 *      which add a new node with the given newValue
 *      immediately after the first value node
 * ! v1.1.7
 *  *kthFromEnd: 
 *      Write a method for the Linked List class which 
 *      takes a number, k, as a parameter. Return the node’s
 *      value that is k from the end of the linked list. You 
 *      have access to the Node class and all the properties on
 *      the Linked List class as well as the methods created in
 *      previous challenges.
 */
class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(value) {

        if (!value) {
            throw new Error('⚠️You did not pass any valid value !!!⚠️');
        }

        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    includes(value) {

        if (!value) {
            throw new Error('⚠️You did not pass any valid value !!!⚠️');
        }

        let node = this.head;

        if (!node) {
            return false;
        }
        while (node.value !== value) {
            node = node.next;

            if (node === null) {
                return false;
            }
        }
        return true;
    }

    toString() {

        let node = this.head;
        let stringsArray = [];

        while (node) {
            stringsArray.push(`{ ${node.value} } ->`);
            node = node.next;

        }

        stringsArray.push('NULL');

        return stringsArray.join(' ');
    }

    append(value) {

        if (!value) {
            throw new Error('⚠️You did not pass any valid value !!!⚠️');
        }

        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.head;

            while (node.next) {
                node = node.next
            }
            node.next = newNode;
        }

        return this;
    }

    insertBefore(value, newValue) {

        if (!value || !newValue) {
            throw new Error('⚠️You did not pass any valid value !!!⚠️');
        }

        let node = this.head;

        if (node.value === value) {

            this.insert(newValue);

        } else {

            while (node.next) {

                if (node.next.value === value) {

                    let newNode = new Node(newValue);
                    newNode.next = node.next;
                    node.next = newNode;
                    break;

                }

                node = node.next;

            }
            if (!node) {

                throw new Error(`⚠️The value ${value} does not exist inside the linkedList⚠️`);

            }
            return this;
        }

    }

    insertAfter(value, newValue) {

        if (!value || !newValue) {
            throw new Error('⚠️You did not pass any valid value !!!⚠️');
        }

        let node = this.head;

        let newNode = new Node(newValue, null);

        while (node) {

            if (node.value === value) {

                newNode.next = node.next;

                node.next = newNode;

                break;

            }

            node = node.next;

        }

        if (!node) {

            throw new Error(`⚠️The value ${value} does not exist inside the linkedList⚠️`);

        }

        return this;

    }

    kthFromEnd(k){

        if (k < 0){
            throw new Error(`⚠️The value ${k} is not a positive integer⚠️`);
        }

        if (k !==0 && !k || typeof(k) === 'string'){
            throw new Error('⚠️The value of k is not a valid value⚠️');
        }

        let linkedList = this.head;

        let linkedListLength = 0;

        while(linkedList){
            linkedListLength++;
            linkedList = linkedList.next;
        }

        if (k > linkedListLength) {
            throw new Error(`⚠️The value ${k} is Greater than the linkedList Length⚠️`);
        }

        linkedList = this.head;

        let goodK = k;

        if (k === linkedListLength){
            goodK = k-1;
        }

        while(linkedListLength-1 != goodK){
            linkedListLength--;
            linkedList = linkedList.next;
        }


        return linkedList.value
}

}

module.exports = LinkedList;