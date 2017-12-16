"use strict";

var s = "Hello";

function greet(name){
    console.log(s + "," + name + "!" );
}

//把函数greet作为模块的输出暴露出去，以供其他模块使用greet函数。
module.exports = greet;