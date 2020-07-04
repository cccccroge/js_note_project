'use strict';

let a = String(NaN);      // "NaN"
let b = "Okay" + 3;       // "Okay3"
let c = "Okay" + 3 + NaN;  // "Okay3NaN"
let d = 3 + NaN;           // NaN

let e = "6" - "2";         // 4
let f = "6" + "2";         // "62"
let g = +"  \t 123  \n"; // 123
let h = +" 12 3  ";        // NaN
let i = +"\t \n";        // 0

let j = Boolean(undefined) || Boolean(null) || Boolean(NaN);  // false
let k = Boolean(""); // false
let l = Boolean(" ") && Boolean("0");  // true
