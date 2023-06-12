// // BUBBLE SORT
// function bubbleSort(numbs: number[]): number[] {
//     let temp: number;
//     for(let i = 0; i < numbs.length; i++) {
//         for(let j = 0; j < numbs.length; j++) {
//             if(numbs[j] > numbs[j+1]) {
//                 temp = numbs[j];
//                 numbs[j] = numbs[j+1];
//                 numbs[j+1] = temp;
//             }
//         }
//     }
//     return numbs;
// }

// console.log(bubbleSort([5, 4, 3, 2, 1]));

// Time Coverage
// const startTime = performance.now();
// const sortedArray = bubbleSort([5, 4, 3, 2, 1]);
// const endTime = performance.now();

// const executionTime = endTime - startTime;
// console.log(`Sorted Array: ${sortedArray}`);
// console.log(`Execution time: ${executionTime} miliseconds`);


// const sorting = (numbs: number[]): number[] => {
//     let temp: number;
//     for(let i = 0; i < numbs.length; i++) {
//         for(let j = 0; j < numbs.length; j++) {
//             if(numbs[j] > numbs[j+1]) {
//                 temp = numbs[j];
//                 numbs[j] = numbs[j+1];
//                 numbs[j+1] = temp;
//             }
//         }
//     }
//     return numbs;
// }

// console.log(sorting([5, 4, 3, 2, 1]));

// QUICK SORT
function quickSort(numbs: number[]): number[] {
    if(numbs.length <= 1) {
        return numbs;
    }

    const pivotIndex = Math.floor(numbs.length / 2);
    const pivot = numbs[pivotIndex];

    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];

    for(const num of numbs) {
        if(num < pivot) {
            less.push(num);
        } else if(num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return quickSort(less).concat(equal, quickSort(greater));
}

// console.log(quickSort([5, 4, 3, 2, 1]));

// Time Coverage
const startTime = performance.now();
const sortedArray = quickSort([5, 4, 3, 2, 1]);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Sorted Array: ${sortedArray}`);
console.log(`Execution time: ${executionTime} miliseconds`);

