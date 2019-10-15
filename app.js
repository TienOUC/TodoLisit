var express = require('express');
var app = express();

//引入controller模块
var todoController = require('./controllers/todoController');


//设置模板引擎
app.set('view engine', 'ejs');   

//静态路径
app.use(express.static('./public'));

//路由
todoController(app);

//监听端口
app.listen(3000,function(){
    console.log('You are listening  to port 3000');
});
