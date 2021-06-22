# ***Code Challenge: Class 27***

# ***Quick Sort***

# ***Blog***

## Index

- [Feature Tasks](#Feature-Tasks)
- [Pseudocode](#Pseudocode)
- [Sample Array](#Sample-Array)
- [Trace](#Trace)
- [Efficency](#Efficency)
- [Code Challenge: Class 28; Quick Sort](README.md)
- [Head of the challenges](https://github.com/shadykh/data-structures-and-algorithms/tree/main/Challenges)

---

## ***Feature Tasks***

- [x] Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

**[⬆ Back to Index](#index)**

 ---

## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

**[⬆ Back to Index](#index)**

----

## Sample Array

- `[8,4,23,42,16,15]`

**[⬆ Back to Index](#index)**

---

## ***Trace***

![quickSort](../../assets/quickSort.png)

---

## Efficency

- Time: O(n^2)
  - The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
- Space: O(logn)

**[⬆ Back to Index](#index)**

---
