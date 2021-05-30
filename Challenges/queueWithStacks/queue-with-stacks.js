'use strict';

const StackAndQueue = require('../../Data-Structures/JavaScript/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

    constructor() {
        this.firstStack = new StackAndQueue.Stack();
        this.secondStack = new StackAndQueue.Stack();
    }

    enqueue(value){
        if(!value){return '⚠️The passing value is not valid.⚠️'};
        
        this.firstStack.push(value);
        return  this.firstStack.top;
    }

    dequeue(){
        if (this.firstStack.peek() === '⚠️The Stack is empty.⚠️ You can not use the peek ❌'){
            return '⚠️The PseudoQueue is empty.⚠️';
        }else {
            return this.firstStack.pop();
        }
    }
}

module.exports = PseudoQueue;