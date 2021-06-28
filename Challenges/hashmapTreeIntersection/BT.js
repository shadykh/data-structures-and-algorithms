'use strict';

const Node = require('./node.js');

class BinaryTree {

    constructor(root = null) {
  
      this.root = root;
  
    }
  
    preOrder() {
  
      let outputArray = [];
  
      let traverse = (node) => {
  
        outputArray.push(node.value);
  
        if (node.left) traverse(node.left);
  
        if (node.right) traverse(node.right);
      };
  
      traverse(this.root);
  
      return outputArray;
  
    }
};


module.exports = BinaryTree;
