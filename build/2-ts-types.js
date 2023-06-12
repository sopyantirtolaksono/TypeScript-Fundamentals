"use strict";
let a;
console.log(typeof (a));
const b = true;
console.log(typeof (b));
const c = 1;
console.log(typeof (c));
const d = "hello";
console.log(typeof (d));
const e = 100n;
console.log(typeof (e));
const f = Symbol("Sym");
console.log(typeof (f));
const g = function () {
    return null;
};
console.log(typeof (g));
const h = null;
console.log(typeof (h));
const i = {};
console.log(typeof (i));
const j = [];
console.log(typeof (j));
class Product {
}
console.log(typeof (Product));
const k = new Product();
console.log(typeof (k));
let z;
z = "Sopyan";
z = 123;
z = true;
function sum(a, b) {
    return a + b;
}
function min(a, b) {
    console.log(a - b);
}
console.log(sum(2, 2));
console.log(min(3, 2));
let telepon;
telepon = 1234;
