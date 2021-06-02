'use strict';

const StackAndQueue = require('../../Data-Structures/JavaScript/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

    constructor() {

        this.firstStack = new StackAndQueue.Stack();

        this.secondStack = new StackAndQueue.Stack();
    }

    enqueue(value) {

        if (!value) { return '⚠️The passing value is not valid.⚠️' };

        this.firstStack.push(value);

        return this.firstStack.top;
    }

    dequeue() {
        if (this.firstStack.peek() === '⚠️The Stack is empty.⚠️ You can not use the peek ❌' && this.secondStack.peek() === '⚠️The Stack is empty.⚠️ You can not use the peek ❌') {

            return '⚠️The PseudoQueue is empty.⚠️';
        }

        if (this.secondStack.peek() === '⚠️The Stack is empty.⚠️ You can not use the peek ❌') {

            while (this.firstStack.peek() !== '⚠️The Stack is empty.⚠️ You can not use the peek ❌') {

                let value = this.firstStack.pop();

                this.secondStack.push(value);

            }

            let values = this.secondStack.pop();

            while (this.secondStack.peek() !== '⚠️The Stack is empty.⚠️ You can not use the peek ❌') {

                let value = this.secondStack.pop();

                this.firstStack.push(value);

            }

            return values;

        }
    }
}

module.exports = PseudoQueue;