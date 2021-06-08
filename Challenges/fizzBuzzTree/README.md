# ***Code Challenge: Class 18***

# ***FizzBuzz Tree***

## Index

- [Feature Tasks](#Feature-Tasks)
- [Whiteboard Challenge Workflow](#Whiteboard-Challenge-Workflow)
- [Code Challenge: Class 18](#Illustration-of-those-steps-and-the-result-of-this-Code-Challenge;-class-18)
  - [Whiteboard](#Whiteboard)
  - [Tests that applied](#Tests-that-applied)
  - [Run the test](#Run-the-test)
  - [Prove of testing](#Prove-of-testing)
  - [Testing Code](#Testing-Code)
  - [Approach & Efficiency](#Approach-&-Efficiency)

---

## ***Feature Tasks***

- [x] Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
- [x] Without utilizing any of the built-in methods available to your language, determine whether or not
the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
  - [x] If the value is divisible by 3, replace the value with “Fizz”
  - [x] If the value is divisible by 5, replace the value with “Buzz”
  - [x] If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
  - [x] If the value is not divisible by 3 or 5, simply turn the number into a String.
- [x] Return a new tree.

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

## ***Illustration of those steps and the result of this Code Challenge; class:18***

<br>

### **Whiteboard**

- `FizzBuzzTree` whiteboard:
  - ![FizzBuzzTree](../../assets/FizzBuzzTree.jpg)

**[⬆ Back to Index](#index)**

#### ***Tests that applied***

- FizzBuzzTree
  - Can successfully return the number [2] as sting when call the FizzBuzzTree function
  - Can successfully return the number [3] as Fizz when call the FizzBuzzTree function
  - Can successfully return the number [5] as Buzz when call the FizzBuzzTree function
  - Can successfully return the number [15] as FizzBuzz when call the FizzBuzzTree function
  - Can successfully return the tree  as FizzBuzz tree when call the FizzBuzzTree function
- Edge Cases/ Custom Errors
  - Calling a FizzBuzzTree with empty tree raises exception

**[⬆ Back to Index](#index)**

#### ***Prove of testing***

- ![FizzBuzzTree](../../assets/FizzBuzzTree-test.PNG)

**[⬆ Back to Index](#index)**

#### ***Testing Code***

- [To See The Test Code Clicks Me 🧪](../../__test__/fizz-buzz-tree.test.js)

**[⬆ Back to Index](#index)**

### ***Approach & Efficiency***

<br>

- I took the same approach that explained above, and I choose it because it is the first time I did like this process, so I should be careful while doing it.

<br>

**[⬆ Back to Index](#index)**

---
