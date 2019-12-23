/**
 * @Author: Younger
 * @Date: 2019-05-15
 * @Time: 16:34
 * main.js - 主页路由模块
 */

const express = require('express');
const router = express.Router();

// 首页
router.get("/", (req, res) => {
    res.send("我的主页");
});

// 关于我
router.get("/about",(req, res) => {
    res.send("关于我");
});

module.exports = router;
