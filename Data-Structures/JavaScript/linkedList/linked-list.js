'use strict';

/**
 * require the node for the linked-list
 */

const Node = require('./node.js');


/**
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
 */
class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insert(value) {
        
        if(!value){
            throw new Error('⚠️You did not insert any valid value !!!⚠️');
        }

        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    includes(value) {

        if(!value){
            throw new Error('⚠️You did not insert any valid value !!!⚠️');
        }
        
        let node = this.head;

        if(!node){
            return false;
        }
        while(node.value !== value){
            node = node.next;

            if(node === null){
                return false;
            }
        }
        return true;
    }

    toString(){

        let node = this.head;
        let stringsArray = [];  

        while(node){
            stringsArray.push(`{ ${node.value} } ->`);
            node = node.next;

        }
        
        stringsArray.push('NULL');

        return stringsArray.join(' ');
    }

}

module.exports = LinkedList;