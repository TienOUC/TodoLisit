var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

app.set('view engine', 'ejs');
app.arguments(express.static('./public'));
todoController(app);
app.listen(3000);

console.log('You are listening to port 3000');