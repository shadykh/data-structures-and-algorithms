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

}

module.exports = LinkedList;