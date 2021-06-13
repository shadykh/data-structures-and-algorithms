'use strict';

'use strict';

const Node = require('../Challenges/fizzBuzzTree/node.js');

const Tree = require('../Challenges/fizzBuzzTree/tree.js');

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

    it('TEST 1 🧪: Can successfully return the number [2] as sting when call the FizzBuzzTree function', () => {

      let root = new Node(2);
  
      let singleRootNodeTree = new Tree(root);

      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
  
      expect(FizzdBuzzdTree.root.value).toEqual('2');
    });

    it('TEST 2 🧪: Can successfully return the number [3] as Fizz when call the FizzBuzzTree function', () => {

      let root = new Node(3);
    
      let singleRootNodeTree = new Tree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('Fizz');
    });

    it('TEST 3 🧪: Can successfully return the number [5] as Buzz when call the FizzBuzzTree function', () => {

      let root = new Node(5);
    
      let singleRootNodeTree = new Tree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('Buzz');
    });

    it('TEST 4 🧪: Can successfully return the number [15] as FizzBuzz when call the FizzBuzzTree function', () => {

      let root = new Node(15);
    
      let singleRootNodeTree = new Tree(root);
  
      let FizzdBuzzdTree = FizzBuzzTree(singleRootNodeTree);
    
      expect(FizzdBuzzdTree.root.value).toEqual('FizzBuzz');
    });

    it('TEST 5 🧪: Can successfully return the tree  as FizzBuzz tree when call the FizzBuzzTree function', () => {
      
      let one = new Node(11);
      let two = new Node(33);
      let three = new Node(55);
      let four = new Node(150);
      let five = new Node(17);
  
      one.children.push(four);
      four.children.push(three, two, five);
  
      let newTree = new Tree(one);

      let FizzdBuzzdTree = FizzBuzzTree(newTree);

      let expectedArray = ['11', 'FizzBuzz', 'Buzz', 'Fizz', '17'];

      expect(FizzdBuzzdTree.root.value).toEqual(expectedArray[0]);
      expect(FizzdBuzzdTree.root.children[0].value).toEqual(expectedArray[1]);
      expect(FizzdBuzzdTree.root.children[0].children[0].value).toEqual(expectedArray[2]);
      expect(FizzdBuzzdTree.root.children[0].children[1].value).toEqual(expectedArray[3]);
      expect(FizzdBuzzdTree.root.children[0].children[2].value).toEqual(expectedArray[4]);

    });

  
    describe('🧪TEST🧪: Edge Cases/ Custom Errors', () => {
  
      it('TEST 1 🧪: Calling a FizzBuzzTree with empty tree raises exception? ->The Tree is empty !!<-', () => {
        try {
  
          let emptyTree = new Tree();

          FizzBuzzTree(emptyTree);
      
        } catch (error) {
          expect(error.message).toBe('The Tree is empty !!');
        } 
      

      });

    });
  });
});