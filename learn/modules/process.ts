/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 16:51
 * @Description: node进程对象 process
 */

process.nextTick(() =>{
    console.log("nextTick callback!");
});

console.log("nextTick was set!");


process.on("exit",(code) => {
    console.log("about to exit with code: " + code);
})

if(typeof(window) === "undefined"){
    console.log("is node.js");
} else {
    console.log("is browser!")
}

// nextTick was set!
// is node.js
// nextTick callback!
// about to exit with code: 0
