'use strict';

const node = require('../../Data-Structures/JavaScript/linkedList/node.js');

const linkedList = require('../../Data-Structures/JavaScript/linkedList/linked-list.js');

function zipLists(linkedList1, linkedList2){

    if(!linkedList1 || !linkedList2 ){
        throw new Error('⚠️You did not insert any/only one valid value !!!⚠️');
      }
    
    let newZippedList = new linkedList();

    let firstLinkedList = linkedList1.head;
    let secondLinkedList = linkedList2.head;

    while(firstLinkedList || secondLinkedList){
        if(firstLinkedList){
            newZippedList.append(firstLinkedList.value);
            firstLinkedList = firstLinkedList.next;
        }

        if(secondLinkedList){
            newZippedList.append(secondLinkedList.value);
            secondLinkedList = secondLinkedList.next;
        }
        
    }
    return newZippedList;
}

module.exports = zipLists;