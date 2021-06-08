'use strict';


function FizzBuzzTree (tree) {

  if (!tree.root){
    return 'The Tree is empty !!';
  }

  let newTree = tree;

  let fizzingBuzzing = (node)=>{

    if (node.value % 3 === 0 && node.value % 5 === 0){

      node.value = 'FizzBuzz';

    } else if (node.value % 3 === 0){

      node.value = 'Fizz';

    } else if (node.value % 5 === 0){

      node.value = 'Buzz';

    } else {
      node.value = `${node.value}`;
    }

    if (node.left) {
      fizzingBuzzing(node.left);
    }

    if (node.right) {
      fizzingBuzzing(node.right);
    }
  }; 

  fizzingBuzzing(newTree.root);


  return newTree;

}

module.exports=FizzBuzzTree;