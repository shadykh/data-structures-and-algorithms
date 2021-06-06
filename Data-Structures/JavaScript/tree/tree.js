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
}

class BinarySearchTree {

  constructor(root = null) {

    this.root = root;

  }

  add(value) {

    if(!value){return '⚠️The passing value is not valid.⚠️';}

    let valueOfNode = new Node(value);

    let addToTree = (node, newValue) => {

      if (node.value > newValue.value) {

        if (!node.left) {
          node.left = newValue;
        } else {
          addToTree(node.left, newValue);
        }
      }

      if (node.value < newValue.value) {

        if (!node.right) {
          node.right = newValue;
        } else {
          addToTree(node.right, newValue);
        }
      }
    };

    if (!this.root) {
      this.root = valueOfNode;
      return this;
    }

    addToTree(this.root, valueOfNode);

  }

  contains(value) {

    if(!value){return '⚠️The passing value is not valid.⚠️';}

    let isContain = false;

    let treeIsContain = (node, valueToBeChecked) => {

      if (!node) {
        return false;
      }

      if (node.value > valueToBeChecked) {
        treeIsContain(node.left, valueToBeChecked);
      } else if (node.value < valueToBeChecked) {
        treeIsContain(node.right, valueToBeChecked);
      } else if (node.value === value) {
        isContain = true;
      }

    };

    treeIsContain(this.root, value);

    return isContain;

  }

}

module.exports = {
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree,
};