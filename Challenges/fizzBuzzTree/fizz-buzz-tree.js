'use strict';

const Node = require('./node.js');

const Tree = require('./tree.js');

function FizzBuzzTree (tree) {

  if (!tree.root){
    return 'The Tree is empty !!';
  }

  let newTree = new Tree();

  let fizzingBuzzing = (node)=>{

    let treeNode = new Node(null);

    if (node.value % 3 === 0 && node.value % 5 === 0){

      treeNode.value = 'FizzBuzz';

    } else if (node.value % 3 === 0){

      treeNode.value = 'Fizz';

    } else if (node.value % 5 === 0){

      treeNode.value = 'Buzz';

    } else {
      treeNode.value = `${node.value}`;
    }

    for (let i = 0; i < node.children.length; i++){

      treeNode.children.push(fizzingBuzzing(node.children[i]));
    }

    return treeNode;

  }; 

  newTree.root = fizzingBuzzing(tree.root);


  return newTree;

}

module.exports=FizzBuzzTree;