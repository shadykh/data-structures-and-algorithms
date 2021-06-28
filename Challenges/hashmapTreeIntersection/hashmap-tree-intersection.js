'use strict';

function hashmapTreeIntersection(tree1, tree2) {
    
    if (!tree1 || !tree2) {
        throw new Error('⚠️You did not pass a valid tree !!!⚠️');
    }

    if (!tree1.root || !tree2.root) {
        throw new Error('⚠️You pass one or both tree as an empty tree !!!⚠️');
    }

    let treesValues = {};
    let intersectionArr = [];
    let nodes1 = tree1.preOrder();
    let nodes2 = tree2.preOrder();

    for (let i = 0; i < nodes1.length; i++) {
        treesValues[nodes1[i]] = true;
    }

    for (let i = 0; i < nodes2.length; i++) {
        if (treesValues[nodes2[i]]) {
            intersectionArr.push(nodes2[i]);
        }
    }

    return intersectionArr;
}

module.exports = hashmapTreeIntersection;