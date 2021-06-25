'use strict';

const LinkedList = require('./linkedList.js');

class HashTable {

    constructor(size) {

        if(!size ){
            throw new Error('⚠️You did not pass a valid value !!!⚠️');
        }

        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) {

        return key.split('').reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0) * 16 % this.size;

    }

    add(key, value) {

        if(!key || !value){
            throw new Error('⚠️You did not pass a valid value !!!⚠️');
        }

        let hash = this.hash(key);

        if (!this.storage[hash]) {

            let linkedList = new LinkedList();

            linkedList.add([key, value]);
            this.storage[hash] = linkedList;

        } else {

            this.storage[hash].add([key, value]);
        }
    }

    get(key) {

        if(!key){
            throw new Error('⚠️You did not pass a valid value !!!⚠️');
        }

        if (!this.contains(key)) {return};

        let hash = this.hash(key);
        let storage = this.storage[hash];
        let current = storage.head;

        while (current) {

            if (current.value[0] === key) {

                return current.value;

            } else if (current.next === null) {

                return null;

            } else {

                current = current.next;

            }

        }

    }

    contains(key) {

        if(!key){
            throw new Error('⚠️You did not pass a valid value !!!⚠️');
        }

        let hash = this.hash(key);

        if (this.storage[hash]) {

            return true;

        } else {

            return false;

        }

    }

}

module.exports = HashTable;