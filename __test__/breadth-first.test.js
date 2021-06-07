'use strict';

const Node = require('../Data-Structures/JavaScript/tree/node.js');

const Binary = require('../Challenges/breadthFirst/breadth-first.js');

/* ------------------------------------------------------------------------------------------------

Test
- Breadth-first Traversal
    - Can successfully instantiate a tree with a single root node and Breadth-first Traversal it
    - Can successfully call Breadth-first Traversal
- Edge Cases/ Custom Errors
    - Calling a breadthFirst in empty tree raises exception

------------------------------------------------------------------------------------------------ */

let tree = null;


describe('🧪TEST🧪: Code Challenge Class 17', () => {

  describe('🧪TEST🧪: Breadth-first Traversal', () => {
  
    beforeAll(() => {
  
      let one = new Node(11);
      let two = new Node(22);
      let three = new Node(33);
      let four = new Node(44);
      let five = new Node(55);
      let six = new Node(66);
      let seven = new Node(77);
      let eight = new Node(88);
      let nine = new Node(99);
  
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

    it('TEST 1 🧪: Can successfully instantiate a tree with a single root node and Breadth-first Traversal it', () => {

      let root = new Node(15);
  
      let singleRootNodeTree = new Binary.BinaryTree(root);
  
      expect(singleRootNodeTree.breadthFirst()).toEqual([15]);
    });

    it('TEST 2 🧪: Can successfully call Breadth-first Traversal ?', () => {

      expect(tree.breadthFirst()).toEqual([11, 22, 33, 66, 44, 55, 77, 88, 99]);
  
    });
  });
  
  describe('🧪TEST🧪: Edge Cases/ Custom Errors', () => {
  
    it('TEST 1 🧪: Calling a breadthFirst in empty tree raises exception? ->The Tree is empty !!<-', () => {
      try {
  
        let emptyTree = new Binary.BinaryTree();

        emptyTree.breadthFirst();
      
      } catch (error) {
        expect(error.message).toBe('The Tree is empty !!');
      } 
      

    });
  
  });
});