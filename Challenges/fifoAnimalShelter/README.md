# ***Code Challenge: Class 12***

# ***Animal Shelter***

## Index

- [Feature Tasks](#Feature-Tasks)
- [Whiteboard Challenge Workflow](#Whiteboard-Challenge-Workflow)
- [Code Challenge: Class 12](#Illustration-of-those-steps-and-the-result-of-this-Code-Challenge;-class-12)
  - [Whiteboard](#Whiteboard)
  - [Tests that applied](#Tests-that-applied)
  - [Prove of testing](#Prove-of-testing)
  - [Testing Code](#Testing-Code)
  - [Approach & Efficiency](#Approach-&-Efficiency)
- [Table of Contents](#Table-of-Contents)

---

## ***Feature Tasks***

- [x] Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- [x] Implement the following methods:
  - [x] `enqueue(animal)`: adds animal to the shelter. animal can be either a dog or a cat object.
  - [x] `dequeue(pref)`: returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

**[⬆ Back to Index](#index)**

## ***Whiteboard Challenge Workflow***

The steps in this document are meant to show you one solid workflow. It’s a structure that works for most people to help them solve whiteboarding problems effectively.

1. **Problem Domain**
    - Re-iterate the problem domain that you have been asked. This can be done either verbatim from the initial question, or a summary in your own words, whatever makes more sense to you.

2. **Visual**
    - Draw out what the problem domain is and visually solve the problem. Label all of the appropriate properties, define your input and output, and show how you will approach the problem towards a solution.

3. **Algorithm**
    - The algorithm is a breakdown of what you need to achieve. This should be a bulleted list or a general overview of what you plan to implement later in the interview.

4. **Big O**
    - Analyze the space AND time efficiency of the algorithm that you just proposed. You should revisit this analysis throughout the interview as you make updates to your algorithm during pseudocode/code/stepthrough.

5. **Pseudocode**
    - Write out pseudocode that defines your algorithm! Use the pseudocode cheat sheet as a guideline to what symbols are acceptable.

6. **Code**
    - Write out syntactically correct code in the language of your course to solve the problem presented. Your real code should be based off of your pseudocode.

7. **Test**
    - There are two main parts to testing. First, walk through both the problem domain and your solution to make sure that it both works and is efficient. This should be a careful, line-by-line stepthrough of your code, where you track variables in a written table along the way. It’s very normal to start the stepthrough, realize that you have a bug in your code, and go back to your code to try and fix the bug; in this case, make sure to go back to careful stepthrough for any modified parts of your code. <br> Secondly, you should talk about how you would test this code if you were writing unit tests. This means listing out a variety of test cases; your goal is to show the interviewer that you know what kinds of tests are useful to ensure that a function is working. At a minimum, you want to list out:
        - a standard input and output
        - some edge cases in how the data is structured; you’ll probably list several of these (the array is already sorted! the tree is very unbalanced! the string is just the character ‘a’ twelve times! etc.)
        - the input is null/negative/zero (the “normal” edge cases)

**[⬆ Back to Index](#index)**

## ***Illustration of those steps and the result of this Code Challenge; class:12***

<br>

### **Whiteboard**

- `fifo-animal-shelter` whiteboard:
  - ![fifo-animal-shelter](../../assets/fifo-animal-shelter.jpg)

**[⬆ Back to Index](#index)**

#### ***Tests that applied***

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

**[⬆ Back to Index](#index)**

#### ***Prove of testing***

- ![fifo-animal-shelter-test](../../assets/fifo-animal-shelter-test.PNG)

**[⬆ Back to Index](#index)**

#### ***Testing Code***

- [To See The Test Code Clicks Me 🧪](../../__test__/fifo-animal-shelter.test.js)

**[⬆ Back to Index](#index)**

### ***Approach & Efficiency***

<br>

- I took the same approach that explained above, and I choose it because it is the first time I did like this process, so I should be careful while doing it.

<br>

**[⬆ Back to Index](#index)**
---

<br>

<br>

## Table of Contents

<br>

|  **Code Challenge** </span> |  **Title**  |   **ToGo** |
| ----------- | ----------- | ----------- |
| Main | Back to the Main | [Clicks me](../../../README.md) |
| Class: 01 | Reverse an array | [Clicks me](../../Challenges/array-reverse/README.md) |
| Class: 02 | Array Shift | [Clicks me](../../Challenges/array-shift/README.md) |
| Class: 03 | Array Binary Search | [Clicks me](../../Challenges/array-binary-search/README.md) |
| Class: 05, 06 & 07 | LinkedList | [Clicks me](../../Challenges/README.md) |
| Class: 08| LinkedList | [Clicks me](../../Challenges/README.md) |
| Class: 10| Stacks and Queues | [Clicks me](../../Data-Structures/JavaScript/stackAndQueues/README.md) |
| Class: 11| PseudoQueue | [Clicks me](../../Challenges/queueWithStacks/README.md) |
| Class: 12| Animal Shelter | [Clicks me](README.md) |
