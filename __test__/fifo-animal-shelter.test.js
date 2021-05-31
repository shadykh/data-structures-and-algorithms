'use strict';

const AnimalShelter = require('../Challenges/fifoAnimalShelter/fifo-animal-shelter.js');



/* ------------------------------------------------------------------------------------------------

Test
- AnimalShelter
    - Can successfully enqueue a dog into a AnimalShelter
    - Can successfully enqueue a cat into a AnimalShelter
    - Can successfully enqueue multiple animals into a AnimalShelter
    - Can successfully dequeue off the AnimalShelter
    - Can successfully empty a AnimalShelter after multiple dequeue
    - Can successfully instantiate an empty AnimalShelter
    - Calling dequeue without [dog or cat => anything else] on AnimalShelter return null

- Edge cases:
  - Passing a null animal to enqueue:
    - null
  - Passing an empty animal to enqueue:
    -''


------------------------------------------------------------------------------------------------ */

describe('TEST: Code Challenge Class 12 ', () => {

    describe('TEST: AnimalShelter ', () => {
        test('TEST 1 🧪: Can successfully enqueue a dog into a AnimalShelter?', () => {

            let animal = 'dog';

            let animalShelter = new AnimalShelter();

            animalShelter.enqueue(animal);

            expect(animalShelter.dog.front.value).toEqual(animal);

        });

        test('TEST 2 🧪: Can successfully enqueue a cat into a AnimalShelter?', () => {

            let animal = 'cat';

            let animalShelter = new AnimalShelter();

            animalShelter.enqueue(animal);

            expect(animalShelter.cat.front.value).toEqual(animal);

        });

        test('TEST 3 🧪: Can successfully enqueue multiple animals into a AnimalShelter?', () => {

            let [animal1, animal2, animal3, animal4,] = ['dog', 'cat', 'dog', 'cat'];

            let animalShelter = new AnimalShelter();

            animalShelter.enqueue(animal1);
            animalShelter.enqueue(animal2);
            animalShelter.enqueue(animal3);
            animalShelter.enqueue(animal4);

            expect(animalShelter.dog.front.value).toEqual(animal3);
            expect(animalShelter.cat.front.value).toEqual(animal4);

        });

        test('TEST 4 🧪: Can successfully dequeue off the AnimalShelter?', () => {


            let animal1 = 'cat';
            let animal2 = 'dog';

            let animalShelter = new AnimalShelter();

            animalShelter.enqueue('cat');
            animalShelter.enqueue('dog');

            expect(animalShelter.dequeue(animal1)).toEqual(animal2);
        });

        test('TEST 5 🧪: Can successfully empty a AnimalShelter after multiple dequeue?', () => {

            let [animal1, animal2, animal3, animal4,] = ['dog', 'cat', 'dog', 'cat'];

            let animalShelter = new AnimalShelter();

            animalShelter.enqueue(animal1);
            animalShelter.enqueue(animal2);
            animalShelter.enqueue(animal3);
            animalShelter.enqueue(animal4);
            animalShelter.dequeue(animal1)
            animalShelter.dequeue(animal2)
            animalShelter.dequeue(animal3)
            animalShelter.dequeue(animal4)
            expect(animalShelter.dog.front).toEqual(null);
            expect(animalShelter.cat.front.next).toEqual(null);

        });

        test('TEST 6 🧪: Can successfully instantiate an empty AnimalShelter?', () => {

            let animalShelter = new AnimalShelter();

            expect(animalShelter.cat.front).toEqual(null);
            expect(animalShelter.dog.front).toEqual(null);

        });

        test('TEST 7 🧪: Calling dequeue without [dog or cat => anything else] on AnimalShelter return null', () => {

            try {
                let animalShelter = new AnimalShelter();
                animalShelter.dequeue('cow')
            } catch (error) {
                expect(error.message).toBe(null)
            }

        });

    })

    describe('TEST: Edge Cases/ Custom Errors ', () => {
        test('TEST 1 🧪: Passing a null animal to enqueue? exception => ⚠️The passing animal is not valid.⚠️', () => {

            try {
                let animal = null;

                let animalShelter = new AnimalShelter();
    
                animalShelter.enqueue(animal);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing animal is not valid.⚠️')
            }

        });

        test('TEST 2 🧪: Passing an empty animal to enqueue? exception => ⚠️The passing animal is not valid.⚠️', () => {

            try {
                let animal = '';

                let animalShelter = new AnimalShelter();
    
                animalShelter.enqueue(animal);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing animal is not valid.⚠️')
            }

        });

        test('TEST 3 🧪: Passing a null animal to dequeue? exception => ⚠️The passing pref is not valid.⚠️', () => {

            try {
                let animal = null;

                let animalShelter = new AnimalShelter();
    
                animalShelter.enqueue(animal);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing pref is not valid.⚠️')
            }

        });

        test('TEST 4 🧪: Passing an empty animal to dequeue? exception => ⚠️The passing pref is not valid.⚠️', () => {

            try {
                let animal = '';

                let animalShelter = new AnimalShelter();
    
                animalShelter.enqueue(animal);
            } catch (error) {
                expect(error.message).toBe('⚠️The passing pref is not valid.⚠️')
            }

        });
    })
})
