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
    let outputArrayIndex = 0;

    let treeNode = [this.root];
    let treeNodeIndex = 0; 

    while (treeNode[outputArrayIndex]) { 

      //let shiftedNode = treeNode.shift(); 
      let shiftedNode = treeNode[outputArrayIndex];

      //outputArray.push(shiftedNode.value); 
      outputArray[outputArrayIndex] = shiftedNode.value;

      if (shiftedNode.left) {
        //treeNode.push(shiftedNode.left);
        treeNode[++treeNodeIndex] = shiftedNode.left;
      }
      if (shiftedNode.right) {
        //treeNode.push(shiftedNode.right);
        treeNode[++treeNodeIndex] = shiftedNode.right;
      }

      delete treeNode[outputArrayIndex];

      outputArrayIndex++;

    }

    treeNode = [];
    
    return outputArray;
  }
}

module.exports = {
  BinaryTree: BinaryTree,
};