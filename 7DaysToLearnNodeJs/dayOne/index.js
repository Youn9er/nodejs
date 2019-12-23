/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 14:13
 * @Description: 主模块
 */
const name = require("./name");
const hobby = require("./hobby");

class DayOne {
    constructor(){

    };
    name(_name){
        name.name(_name)
    }

    hobby(_hobby) {
        hobby.hobby(_hobby)
    }

}
name.name("Younger");
hobby.hobby("sing jump basketball");

module .exports;
