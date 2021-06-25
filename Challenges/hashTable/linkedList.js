'use strict';

const Node = require('./node.js');

class linkedList {

  constructor() {

    this.head = null;

  }

  add(value) {

    let node = new Node(value);

    if (!this.head) {

      this.head = node;

    } else {

      node.next = this.head;
      this.head = node;

    }

  }

}

module.exports = linkedList;