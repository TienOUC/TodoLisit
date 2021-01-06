var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');


//本地mongoDB 
mongoose.connect('mongodb://localhost/todoList', {useNewUrlParser: true, useUnifiedTopology: true});

//schema对象
var todoSchema = new mongoose.Schema({
    item: String
})
//将schema对象转换为数据模型
var Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        var itemOne = Todo(req.body).save(function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res) {
        Todo.find({item: req.params.item.replace(/-/g, ' ')}).deleteOne(function(err, data)  {
            if(err) throw err;
            res.json(data);
        });
    });
}
