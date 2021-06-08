'use strict';

'use strict';

const Node = require('../Data-Structures/JavaScript/tree/node.js');

const Binary = require('../Data-Structures/JavaScript/tree/tree.js');

const FizzBuzzTree = require('../Challenges/fizzBuzzTree/fizz-buzz-tree.js');

/* ------------------------------------------------------------------------------------------------

Test
- FizzBuzzTree
    - Can successfully return the number [2] as sting when call the FizzBuzzTree function
    - Can successfully return the number [3] as Fizz when call the FizzBuzzTree function
    - Can successfully return the number [5] as Buzz when call the FizzBuzzTree function
    - Can successfully return the number [15] as FizzBuzz when call the FizzBuzzTree function
    - Can successfully return the tree  as FizzBuzz tree when call the FizzBuzzTree function
- Edge Cases/ Custom Errors
    - Calling a FizzBuzzTree with empty tree raises exception

------------------------------------------------------------------------------------------------ */

let tree = null;


describe('🧪TEST🧪: Code Challenge Class 18', () => {

  describe('🧪TEST🧪: FizzBuzz Tree', () => {
  
    beforeAll(() => {
  
      let one = new Node(11);
      let two = new Node(33);
      let three = new Node(55);
      let four = new Node(150);
      let five = new Node(17);
      let six = new Node(99);
  
      one.left = two;
      one.right = three;
      two.left = four;
      three.left = six;
      three.right = five;
  
      tree = new Binary.BinaryTree(one);
  
    });

    it('TEST 1 🧪: Can successfully return the number [2] as sting when call the FizzBuzzTree function', () => {

      let root = new Node(2);
  
      let singleRootNodeTree = new Binary.BinaryTree(root);

      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
  
      expect(FizzdBuzzdTree.root.value).toEqual('2');
    });

    it('TEST 2 🧪: Can successfully return the number [3] as Fizz when call the FizzBuzzTree function', () => {

      let root = new Node(3);
    
      let singleRootNodeTree = new Binary.BinaryTree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('Fizz');
    });

    it('TEST 3 🧪: Can successfully return the number [5] as Buzz when call the FizzBuzzTree function', () => {

      let root = new Node(5);
    
      let singleRootNodeTree = new Binary.BinaryTree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('Buzz');
    });

    it('TEST 4 🧪: Can successfully return the number [15] as FizzBuzz when call the FizzBuzzTree function', () => {

      let root = new Node(15);
    
      let singleRootNodeTree = new Binary.BinaryTree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('FizzBuzz');
    });

    it('TEST 5 🧪: Can successfully return the tree  as FizzBuzz tree when call the FizzBuzzTree function', () => {
  
      let FizzdBuzzdTree = FizzBuzzTree(tree);
    
      expect(FizzdBuzzdTree.preOrder()).toEqual( ['11', 'Fizz', 'FizzBuzz', 'Buzz', 'Fizz', '17']);
      expect(tree.preOrder()).toEqual( ['11', 'Fizz', 'FizzBuzz', 'Buzz', 'Fizz', '17']);
    });

  
    describe('🧪TEST🧪: Edge Cases/ Custom Errors', () => {
  
      it('TEST 1 🧪: Calling a FizzBuzzTree with empty tree raises exception? ->The Tree is empty !!<-', () => {
        try {
  
          let emptyTree = new Binary.BinaryTree();

          FizzBuzzTree(emptyTree);
      
        } catch (error) {
          expect(error.message).toBe('The Tree is empty !!');
        } 
      

      });

    });
  });
});