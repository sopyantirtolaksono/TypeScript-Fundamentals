/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

let list_1: number[];
list_1 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

let list_2: string[];
list_2 = ["a", "b", "c", "d"];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

let list_3: (string | number)[];
list_3 = ["hello", 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

let list_4: [string, number, number, number];
list_4 = ["cordinat", 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// Square Bracket
let list_5_1: {color: string; index: number}[];
list_5_1 = [
    { color: "blue", index: 1 },
    { color: "red", index: 2 }
];

// Generic
let list_5_2: Array<{color: string, index: number}>;
list_5_2 = [
    { color: "blue", index: 1 },
    { color: "red", index: 2 }
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

// Square Bracket
let list_6_1: number[][];
list_6_1 = [
    [1, 2],
    [3, 4]
];

// Generic
let list_6_2: Array<Array<number>>;
list_6_2 = [
    [1, 2],
    [3, 4]
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

// Array
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, "four"];
// Object
let {color, index}: {color: string, index: number} = {color: "red", index: 1};
