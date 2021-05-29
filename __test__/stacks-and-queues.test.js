'use strict';

const node = require('../Data-Structures/JavaScript/stacksAndQueues/node.js');

const Lab10 = require("../Data-Structures/JavaScript/stacksAndQueues/stacks-and-queues.js");


/* ------------------------------------------------------------------------------------------------

Test
- Stack
    - Can successfully push onto a stack
    - Can successfully push multiple values onto a stack
    - Can successfully pop off the stack
    - Can successfully empty a stack after multiple pops
    - Can successfully peek the next item on the stack
    - Can successfully instantiate an empty stack
    - Calling pop on empty stack raises exception
    - Calling peek on empty stack raises exception
    - Can successfully isEmpty return false when it is not empty
- Queue
    - Can successfully enqueue into a queue
    - Can successfully enqueue multiple values into a queue
    - Can successfully dequeue out of a queue the expected value
    - Can successfully peek into a queue, seeing the expected value
    - Can successfully empty a queue after multiple dequeues
    - Can successfully instantiate an empty queue
    - Calling dequeue on empty queue raises exception
    - Calling peek on empty queue raises exception
    - Can successfully isEmpty return false when it is not empty
- Edge cases:
  - Passing a null value to push/enqueue:
    - null
  - Passing an empty value to push/enqueue:
    -''


------------------------------------------------------------------------------------------------ */


describe('TEST: Code Challenge Class 10 ', () => {

    describe('TEST: Stack ', () => {
        test('TEST 1 🧪: Can successfully push onto a stack?', () => {

            let value = 10;
    
            let stack = new Lab10.Stack();
    
            stack.push(value);
    
            expect(stack.top.value).toEqual(value);
    
        });
    
        test('TEST 2 🧪: Can successfully push multiple values onto a stack?', () => {
    
            let [value1, value2] = [10, 20];
    
            let stack = new Lab10.Stack();
    
            stack.push(value1);
            stack.push(value2);
    
            expect(stack.top.value).toEqual(value2);
    
        });
    
        test('TEST 3 🧪: Can successfully pop off the stack?', () => {
            let [value1, value2] = [10, 20];
    
            let stack = new Lab10.Stack();
    
            stack.push(value1);
            stack.push(value2);
    
            stack.pop();
    
            expect(stack.top.value).toEqual(value1);
    
        });
    
        test('TEST 4 🧪: Can successfully empty a stack after multiple pops?', () => {
            let [value1, value2] = [10, 20];
    
            let stack = new Lab10.Stack();
    
            stack.push(value1);
            stack.push(value2);
    
            stack.pop();
            stack.pop();
    
            expect(stack.top).toEqual(null);
    
        });
    
        test('TEST 5 🧪: Can successfully peek the next item on the stack?', () => {
            let [value1, value2] = [10, 20];
    
            let stack = new Lab10.Stack();
    
            stack.push(value1);
            stack.push(value2);
    
            expect(stack.peek()).toEqual(value2);
    
        });
    
        test('TEST 6 🧪: Can successfully instantiate an empty stack?', () => {
    
            let stack = new Lab10.Stack();
    
            expect(stack.isEmpty()).toEqual(true);
    
        });
    
        test('TEST 7 🧪: Calling pop on empty stack raises exception? exception => ⚠️The Stack is empty⚠️. You can not pop from it ❌', () => {
    
            try {
                let stack = new Lab10.Stack();
                stack.pop()
            } catch (error) {
                expect(error.message).toBe('⚠️The Stack is empty⚠️. You can not pop from it ❌')
            } 
    
        });
    
        test('TEST 8 🧪: Calling peek on empty stack raises exception? exception => ⚠️The Stack is empty.⚠️ You can not use the peek ❌', () => {
    
            try {
                let stack = new Lab10.Stack();
                stack.peek()
            } catch (error) {
                expect(error.message).toBe('⚠️The Stack is empty⚠️. You can not use the peek ❌')
            } 
    
        });

        test('TEST 9 🧪: Can successfully isEmpty return false when it is not empty?', () => {
    
            let value = 10;
    
            let stack = new Lab10.Stack();
    
            stack.push(value);
    
            expect(stack.isEmpty()).toEqual(false);
    
        });

        test('TEST 10 🧪: Calling push with null/empty raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

            try {

                let value = 10;
    
                let stack = new Lab10.Stack();
        
                stack.push(value);

            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            } 
        });
    })

    describe('TEST: Queue ', () => {
        test('TEST 1 🧪: Can successfully enqueue into a queue?', () => {

            let value = 10;
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value);
    
            expect(queue.front.value).toEqual(value);
    
        });
    
        test('TEST 2 🧪: Can successfully enqueue multiple values into a queue?', () => {
    
            let [value1, value2] = [10, 20];
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value1);
            queue.enqueue(value2);
    
            expect(queue.front.value).toEqual(value2);
    
        });
    
        test('TEST 3 🧪: Can successfully dequeue out of a queue the expected value?', () => {
            let [value1, value2] = [10, 20];
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value1);
            queue.enqueue(value2);
    
            queue.dequeue();
    
            expect(queue.front).toEqual(null);
    
        });
    
        test('TEST 4 🧪: Can successfully peek into a queue, seeing the expected value?', () => {
            let [value1, value2] = [10, 20];
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value1);
            queue.enqueue(value2);
    
            expect(queue.peek()).toEqual(value2);
    
        });
    
        test('TEST 5 🧪: Can successfully empty a queue after multiple dequeues?', () => {
            let [value1, value2] = [10, 20];
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value1);
            queue.enqueue(value2);
    
            queue.dequeue();
            queue.dequeue();

            expect(queue.front).toEqual(null);
    
        });
    
        test('TEST 6 🧪: Can successfully instantiate an empty queue', () => {
    
            let queue = new Lab10.Queue();
    
            expect(queue.isEmpty()).toEqual(true);
    
        });
    
        test('TEST 7 🧪: Calling dequeue on empty queue raises exception? exception => ⚠️The Queue is empty⚠️. You can not dequeue from it ❌', () => {
    
            try {
                let queue = new Lab10.Queue();
                queue.dequeue()
            } catch (error) {
                expect(error.message).toBe('⚠️The Queue is empty⚠️. You can not dequeue from it ❌')
            } 
    
        });
    
        test('TEST 8 🧪: Calling dequeue on empty queue raises exception? exception => ⚠️The Queue is empty.⚠️ You can not use the peek ❌', () => {
    
            try {
                let queue = new Lab10.Queue();
                queue.peek()
            } catch (error) {
                expect(error.message).toBe('⚠️The Queue is empty.⚠️ You can not use the peek ❌')
            } 
    
        });

        test('TEST 9 🧪: Can successfully isEmpty return false when it is not empty?', () => {
    
            let value = 10;
    
            let queue = new Lab10.Queue();
    
            queue.enqueue(value);
    
            expect(queue.isEmpty()).toEqual(false);
    
        });

        test('TEST 10 🧪: Calling enqueue with null/empty raises exception? exception => ⚠️The passing value is not valid.⚠️', () => {

            try {

                let value = 10;
    
                let queue = new Lab10.Queue();
        
                queue.enqueue(value);

            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            } 
        });
    })
});