/* eslint-disable no-console */
// Typescript Data Types

/********** Typescript Types ***********/

let a;                  // undefined
console.log(typeof(a));

const b = true;         // boolean
console.log(typeof(b));

const c = 1;              // number
console.log(typeof(c));

const d = "hello";        // string
console.log(typeof(d));

const e = 100n;           // big int (starting ES2020)
console.log(typeof(e));

const f = Symbol("Sym");  // symbol  (starting ES2015)
console.log(typeof(f));

const g = function () {   // function
    return null;
};
console.log(typeof(g));

const h = null;           // null ( special primitive )
console.log(typeof(h));

const i = {};             // Object Literal
console.log(typeof(i));

const j: number[] = [];   // array
console.log(typeof(j));

class Product {
  // class
  //...
}
console.log(typeof(Product));

const k = new Product(); // object
console.log(typeof(k));

let z: any;              // any
z = "Sopyan";
z = 123;
z = true;

function sum(a: number, b: number): number {    // return value
    return a + b;
}

function min(a: number, b: number): void {      // without return value
    console.log(a - b);
}

console.log(sum(2, 2));
console.log(min(3, 2));

type CustomType = number;
let telepon: CustomType;
telepon = 1234;



/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity
