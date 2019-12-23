/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 15:39
 * @Description: node Buffer(数据块)
 */
// JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造.

let _buffer = new Buffer([0x86, 0x65, 0x6c, 0x6c, 0x6f]);

console.log("buffer==", _buffer);
console.log("index===",_buffer[0]);
console.log("length===",_buffer.length);
console.log("bufferToString===",_buffer.toString("utf-8"));
console.log("stringToBuffer===",new Buffer("hello", "utf-8"));

// buffer copy

let dup = new Buffer(_buffer.length);

_buffer.copy(dup);
dup[0] = 0X48;
console.log("_buffer==",_buffer);   // <Buffer 86 65 6c 6c 6f>
console.log("dup==",dup);   //  <Buffer 48 65 6c 6c 6f>
