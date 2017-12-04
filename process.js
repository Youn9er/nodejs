
// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function (){
    console.log("nextTick callBack");
});

console.log("nextTick was set"); 

/*
nextTick was set
nextTick callBack
*/