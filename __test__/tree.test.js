'use strict';

const Node = require('../Data-Structures/JavaScript/tree/node.js');

const Binary = require('../Data-Structures/JavaScript/tree/tree.js');

/* ------------------------------------------------------------------------------------------------

Test
- BinaryTree & BinarySearchTree
    - Can successfully instantiate an empty Binary Tree
    - Can successfully instantiate an empty Binary Search Tree
    - Can successfully instantiate a tree with a single root node
    - Can successfully add a left child and right child to a single root node
    - Can successfully return a collection from a preOrder traversal
    - Can successfully return a collection from an inOrder traversal
    - Can successfully return a collection from a postOrder traversal
    - Can successfully add to a BinarySearchTree
    - Can successfully check by contains if a value is in a BinarySearchTree

- Edge Cases/ Custom Errors
    - Calling add with null raises exception?
    - Calling add with empty raises exception?
    - Calling contains with null raises exception?
    - Calling contains with empty raises exception?


------------------------------------------------------------------------------------------------ */

let tree = null;

let tree1 = null;

describe('🧪TEST🧪: Code Challenge Class 15', () => {

  describe('🧪TEST🧪: BinaryTree and BinarySearchTree', () => {

    beforeAll(() => {

      let one = new Node(1);
      let two = new Node(2);
      let three = new Node(3);
      let four = new Node(4);
      let five = new Node(5);
      let six = new Node(6);
      let seven = new Node(7);
      let eight = new Node(8);
      let nine = new Node(9);

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

    it('TEST 1 🧪: Can successfully instantiate an empty Binary Tree', () => {

      let emptyTree = new Binary.BinaryTree();

      expect(emptyTree.root).toEqual(null);
    });

    it('TEST 2 🧪: Can successfully instantiate an empty Binary Search Tree', () => {

      let emptyTree = new Binary.BinarySearchTree();

      expect(emptyTree.root).toEqual(null);
    });

    it('TEST 3 🧪: Can successfully instantiate a tree with a single root node', () => {

      let root = new Node(15);

      let singleRootNodeTree = new Binary.BinaryTree(root);

      expect(singleRootNodeTree.root).toEqual(root);
    });

    it('TEST 4 🧪: Can successfully add a left child and right child to a single root node', () => {

      let root = new Node(10);
      let left = new Node(20);
      let right = new Node(15);

      root.left = left;
      root.right = right;

      let singleRootNodeTree = new Binary.BinaryTree(root);

      expect(singleRootNodeTree.root).toEqual(root);
      expect(singleRootNodeTree.root.left).toEqual(left);
      expect(singleRootNodeTree.root.right).toEqual(right);
    });

    it('TEST 5 🧪: Can successfully return a collection from a preOrder traversal', () => {

      let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];

      let preOrderResult = tree.preOrder();

      expect(preOrderResult).toEqual(expected);
    });


    it('TEST 6 🧪: Can successfully return a collection from an inOrder traversal', () => {

      let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];

      let inOrderResult = tree.inOrder();

      expect(inOrderResult).toEqual(expected);
    });


    it('TEST 7 🧪: Can successfully return a collection from a postOrder traversal', () => {

      let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];

      let postOrderResult = tree.postOrder();

      expect(postOrderResult).toEqual(expected);
    });

    it('TEST 8 🧪: Can successfully add to a BinarySearchTree', () => {


      let root = new Node(10);
      let newValue1 = new Node(20);
      let newValue2 = new Node(15);

      let BinarySearchTree = new Binary.BinarySearchTree(root);

      BinarySearchTree.add(20);

      BinarySearchTree.add(5);

      expect(BinarySearchTree.root).toEqual(root);
      expect(BinarySearchTree.root.left.value).toEqual(5);
      expect(BinarySearchTree.root.right.value).toEqual(20);
    });

    it('TEST 9 🧪: Can successfully check by contains if a value is in a BinarySearchTree', () => {


      let root = new Node(10);

      let BinarySearchTree = new Binary.BinarySearchTree(root);

      BinarySearchTree.add(20);

      BinarySearchTree.add(5);

      expect(BinarySearchTree.contains(20)).toEqual(true);
      expect(BinarySearchTree.contains(5)).toEqual(true);
      expect(BinarySearchTree.contains(30)).toEqual(false);
    });
  });

  describe('🧪TEST🧪: Edge Cases/ Custom Errors', () => {

    test('TEST 1 🧪: Calling add with null raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

      try {

        let root = new Node(10);

        let BinarySearchTree = new Binary.BinarySearchTree(root);
    
        BinarySearchTree.add(null);

      } catch (error) {
        expect(error.message).toBe('⚠️The passing value is not valid.⚠️');
      } 
    });

    test('TEST 2 🧪: Calling add with empty raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

      try {

        let root = new Node(10);

        let BinarySearchTree = new Binary.BinarySearchTree(root);
    
        BinarySearchTree.add('');

      } catch (error) {
        expect(error.message).toBe('⚠️The passing value is not valid.⚠️');
      } 
    });

    test('TEST 3 🧪: Calling contains with null raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

      try {

        let root = new Node(10);

        let BinarySearchTree = new Binary.BinarySearchTree(root);
    
        BinarySearchTree.add(5);

        BinarySearchTree.contains(null);

      } catch (error) {
        expect(error.message).toBe('⚠️The passing value is not valid.⚠️');
      } 
    });

    test('TEST 4 🧪: Calling contains with empty raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

      try {

        let root = new Node(10);

        let BinarySearchTree = new Binary.BinarySearchTree(root);
    
        BinarySearchTree.add(5);

        BinarySearchTree.contains('');

      } catch (error) {
        expect(error.message).toBe('⚠️The passing value is not valid.⚠️');
      } 
    });

  });
});
