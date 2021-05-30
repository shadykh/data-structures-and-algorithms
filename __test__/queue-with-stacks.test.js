'use strict';

const PseudoQueue = require('../Challenges/queueWithStacks/queue-with-stacks.js');



/* ------------------------------------------------------------------------------------------------

Test
- PseudoQueue
    - Can successfully enqueue onto a PseudoQueue
    - Can successfully enqueue multiple values onto a PseudoQueue
    - Can successfully dequeue off the PseudoQueue
    - Can successfully empty a PseudoQueue after multiple dequeue
    - Can successfully instantiate an empty PseudoQueue
    - Calling dequeue on empty PseudoQueue raises exception

- Edge cases:
  - Passing a null value to enqueue:
    - null
  - Passing an empty value to enqueue:
    -''


------------------------------------------------------------------------------------------------ */

describe('TEST: Code Challenge Class 11 ', () => {

    describe('TEST: PseudoQueue ', () => {
        test('TEST 1 🧪: Can successfully enqueue onto a PseudoQueue?', () => {

            let value = 10;

            let pseudoQueue = new PseudoQueue();

            pseudoQueue.enqueue(value);

            expect(pseudoQueue.firstStack.top.value).toEqual(value);

        });

        test('TEST 2 🧪: Can successfully enqueue multiple values onto a PseudoQueue?', () => {

            let [value1, value2] = [10, 20];

            let pseudoQueue = new PseudoQueue();

            pseudoQueue.enqueue(value1);
            pseudoQueue.enqueue(value2);

            expect(pseudoQueue.firstStack.top.value).toEqual(value2);

        });

        test('TEST 3 🧪: Can successfully dequeue off the PseudoQueue?', () => {
            let [value1, value2] = [10, 20];

            let pseudoQueue = new PseudoQueue();

            pseudoQueue.enqueue(value1);
            pseudoQueue.enqueue(value2);

            expect(pseudoQueue.dequeue()).toEqual(value2);

        });

        test('TEST 4 🧪: Can successfully empty a PseudoQueue after multiple dequeue?', () => {
            let [value1, value2] = [10, 20];

            let pseudoQueue = new PseudoQueue();

            pseudoQueue.enqueue(value1);
            pseudoQueue.enqueue(value2);

            pseudoQueue.dequeue();

            expect(pseudoQueue.dequeue()).toEqual(value1);

        });

        test('TEST 5 🧪: Can successfully instantiate an empty PseudoQueue?', () => {

            let pseudoQueue = new PseudoQueue();

            expect(pseudoQueue.firstStack.top).toEqual(null);

        });

        test('TEST 6 🧪: Calling dequeue on empty PseudoQueue raises exception? exception => ⚠️The PseudoQueue is empty.⚠️', () => {

            try {
                let pseudoQueue = new PseudoQueue();
                pseudoQueue.dequeue()
            } catch (error) {
                expect(error.message).toBe('⚠️The PseudoQueue is empty.⚠️')
            }

        });

    })

    describe('TEST: Edge Cases/ Custom Errors ', () => {
        test('TEST 1 🧪: Passing a null value to enqueue? exception => ⚠️The passing value is not valid.⚠️', () => {

            try {
                let value = null;

                let pseudoQueue = new PseudoQueue();
    
                pseudoQueue.enqueue(value);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            }

        });

        test('TEST 2 🧪: Passing an empty value to enqueue? exception => ⚠️The passing value is not valid.⚠️', () => {

            try {
                let value = '';

                let pseudoQueue = new PseudoQueue();
    
                pseudoQueue.enqueue(value);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing value is not valid.⚠️')
            }

        });
    })
})
