'use strict';

const Node = require('../../Data-Structures/JavaScript/tree/node.js');

class BinaryTree {

  constructor(root = null) {

    this.root = root;

  }
  /*----------------------------- Extend your BinaryTree class according to ---------------------------------------- 
  --------------------------- the feature tasks. So, this code in not needed here ----------------------------------
  ------------------------you can find the main source code in the Data-Structures Folder --------------------------
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

  inOrder() {

    let outputArray = [];

    let traverse = (node) => {

      if (node.left) traverse(node.left);

      outputArray.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return outputArray;

  }

  postOrder() {

    let outputArray = [];

    let traverse = (node) => {

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      outputArray.push(node.value);
    };

    traverse(this.root);

    return outputArray;

  }
  ------------------------------ Extend your BinaryTree class according to ----------------------------------------- 
  --------------------------- the feature tasks. So, this code in not needed here ----------------------------------
  ------------------------you can find the main source code in the Data-Structures Folder --------------------------
  */
  findMaximumValue() {
      
    let maximumValue = 0;

    if (!this.root){
      return 'The Tree is empty !!';
    }

    let findTheMaximumValue = (node)=> {

      if (node.value > maximumValue){
        maximumValue = node.value;
      }

      if (node.left) {
        findTheMaximumValue(node.left);
      }

      if (node.right) {
        findTheMaximumValue (node.right);
      }
    };

    findTheMaximumValue(this.root);
    
    return maximumValue;
  }
}

module.exports = {
  BinaryTree: BinaryTree,
};