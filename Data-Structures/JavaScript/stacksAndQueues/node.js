'use strict';

/**
 * Node class that has properties for the
 * value stored in the Node --->  this.value = value,
 * and a pointer to the next Node ---> this.next = null.
 * */ 


class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}


module.exports = Node;