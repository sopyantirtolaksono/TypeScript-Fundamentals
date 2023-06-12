"use strict";
function quickSort(numbs) {
    if (numbs.length <= 1) {
        return numbs;
    }
    const pivotIndex = Math.floor(numbs.length / 2);
    const pivot = numbs[pivotIndex];
    const less = [];
    const equal = [];
    const greater = [];
    for (const num of numbs) {
        if (num < pivot) {
            less.push(num);
        }
        else if (num === pivot) {
            equal.push(num);
        }
        else {
            greater.push(num);
        }
    }
    return quickSort(less).concat(equal, quickSort(greater));
}
const startTime = performance.now();
const sortedArray = quickSort([5, 4, 3, 2, 1]);
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`Sorted Array: ${sortedArray}`);
console.log(`Execution time: ${executionTime} miliseconds`);
