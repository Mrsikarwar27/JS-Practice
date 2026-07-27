
// const arr = [1, 2, 3, "a", "fd"];
// const char = [];
// const num = [];

// arr.forEach((element) => {
//   if (typeof element === "string") {
//     char.push(element);
//   } else {
//     num.push(element);
//   }
// });


// console.log(char);
// console.log(num);

//===========================================================
// function curry(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// curry(2)(3)(1);

//===========================================================

// both the answers 5
// console.log(sum(2, 3))
// console.log(sum(2)(3))

// function sum(a, b) {
//     if (b == undefined) {
//         return c => {
//             return a + c
//         }
//     }
//      return a + b
// }

//===========================================================

/*
'abcdef'
'123'
=>  a1b2c3def

'abc'
'123456'
=>  a1b2c3456

*/


console.log(merge("abcdef", "123"));
console.log(merge("abc", "123456"));


function merge(a, b) {
    let m = Math.min(a.length, b.length);
    let temp = " "
    let i;

    for (i=0; i < m; i++) {
        temp = temp + a[i] + b[i]
    }
    return temp + a.slice(i) + b.slice(i)

}

//===========================================================