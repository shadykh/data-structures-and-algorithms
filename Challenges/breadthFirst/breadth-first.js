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
  
  breadthFirst (){
    
    if (!this.root){
      return 'The Tree is empty !!';
    }

    let outputArray = [];

    let treeNode = [this.root]; 

    while (treeNode.length > 0) { 

      let shiftedNode = treeNode.shift(); 
      
      outputArray.push(shiftedNode.value); 

      if (shiftedNode.left) {
        treeNode.push(shiftedNode.left);
      }
      if (shiftedNode.right) {
        treeNode.push(shiftedNode.right);
      }

    }

    return outputArray;
  }
}

module.exports = {
  BinaryTree: BinaryTree,
};