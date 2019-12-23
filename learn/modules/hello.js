/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 14:57
 */
"use strict"

let say = "Hello";

// function greet(name){
//     console.log(say + "," + name + "!")
// }
//
// module.exports = greet;

module.exports = {
    greet: (name) => {
        console.log(say + "," + name + "!");
    },
    hi: (name) => {
        console.log("hi，" + name + "!");
    },
    goodBye: (name) => {
        console.log("goodBye，" + name + "!");
    }
}
