'use strict';

const Node = require('../Data-Structures/JavaScript/tree/node.js');

const Binary = require('../Challenges/findMaximumBinaryTree/find-maximum-value.js');

/* ------------------------------------------------------------------------------------------------

Test
- Maximum Value in a Binary Tree
    - Can successfully instantiate a tree with a single root node and find the Maximum Value in it
    - Can successfully find the Maximum Value in a Binary Tree
- Edge Cases/ Custom Errors
    - Calling a findMaximumValue in empty tree raises exception

------------------------------------------------------------------------------------------------ */

let tree = null;


describe('🧪TEST🧪: Code Challenge Class 16', () => {

  describe('🧪TEST🧪: Find the Maximum Value in a Binary Tree', () => {
  
    beforeAll(() => {
  
      let one = new Node(10);
      let two = new Node(20);
      let three = new Node(30);
      let four = new Node(40);
      let five = new Node(50);
      let six = new Node(60);
      let seven = new Node(70);
      let eight = new Node(80);
      let nine = new Node(90);
  
      one.left = two;
      one.right = three;
      two.left = six;
      six.right = seven;
      seven.left = eight;
      seven.right = nine;
      three.left = four;
      three.right = five;
  
      tree = new Binary.BinaryTree(one);
  
    });

    it('TEST 1 🧪: Can successfully instantiate a tree with a single root node and find the Maximum Value in it', () => {

      let root = new Node(15);
  
      let singleRootNodeTree = new Binary.BinaryTree(root);
  
      expect(singleRootNodeTree.findMaximumValue()).toEqual(15);
    });

    it('TEST 2 🧪: Can successfully find the Maximum Value in a Binary Tree ?', () => {

      expect(tree.findMaximumValue()).toEqual(90);
  
    });
  });
  
  describe('🧪TEST🧪: Edge Cases/ Custom Errors', () => {
  
    it('TEST 1 🧪:Calling a findMaximumValue in empty tree raises exception? ->The Tree is empty !!<-', () => {
      try {
  
        let emptyTree = new Binary.BinaryTree();

        emptyTree.findMaximumValue();
      
      } catch (error) {
        expect(error.message).toBe('The Tree is empty !!');
      } 
      

    });
  
  });
});