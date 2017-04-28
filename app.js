const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.static('./dev/public')); //静态文件

app.set('views', './dev/view'); // 指定视图所在的位置
app.engine('html', ejs.__express); //映射到html文件上
app.set('view engine', 'html'); //设置视图引擎

const index = require('./dev/controller/routes/pages/index.js');

app.use(index);

module.exports = app;