'use strict';


class Tree {

  constructor(value) {

    if (value) {

      this.root = value;

    } else {

      this.root = null;
      
    }

  }
}

module.exports = Tree;