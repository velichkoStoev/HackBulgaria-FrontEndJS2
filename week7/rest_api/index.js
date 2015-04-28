// load the express module
var express = require('express');
var bodyParser = require('body-parser');

// declare our app
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// this will serve as our resource on the server
var students = [
  {
    id: '1', 
    name: 'Kul Kul', 
    email: 'kul@kul.com',
    classes: ['Ailqk', 'Maina'],
    gitRepo: 'kulcho' 
  },
  {
    id: '2', 
    name: 'Chill', 
    email: 'chill@chill.com',
    classes: ['Ailqk', 'Maina'],
    gitRepo: 'chillcho'
  }
]

// listen for requests
var server = app.listen(1337, function() {
 console.log('Listening on port %d', server.address().port);
});

//GET students
app.get('/students', function(req, res){
 res.jsonp(students);
});

// POST students
app.post('/students', function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var classes = req.body.classes;
    var gitRepo = req.body.gitRepo;

    var student = {
        id: id,
        name: name,
        email: email,
        classes: classes,
        gitRepo: gitRepo
    };

    students.push(student);

    res.jsonp({
        msg: 'student created',
        data: student
    });
});

// GET students/:id
app.get('/students/:id', function(req, res){
    var id = req.params.id;

    for(var i = 0; i < students.length; i+= 1){
        if(students[i].id == id){
            var student = students[i];
            break;
        }
    }

    res.jsonp({
        msg: 'student with id of ' + id + ' returned',
        data: student
    });
});

// PUT students/:id
app.put('/students/:id', function(req, res){
    console.log(req.body);
    var id = req.params.id;
    
    for(var i = 0; i < students.length; i+= 1){
        if(students[i].id == id){
            var student = students[i];
            break;
        }
    }

    student.id = req.body.id || student.id; 
    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.gitRepo = req.body.gitRepo || student.gitRepo;
    student.classes = req.body.classes || student.classes;

    res.jsonp({
        msg: 'student with id of ' + id + ' updated',
        data: student
    });

});

// DELETE students/:id
app.delete('/students/:id', function(req, res){
    var id = req.params.id;
    var msg;
    var isDeleted = false;

    for(var i = 0; i < students.length; i+= 1){
        if(students[i].id == id){
            delete students[id];
            isDeleted = true;
            break;
        }
    }

    if(isDeleted){
       msg = 'student with id of ' + id + ' deleted';
    }else{
       msg = 'student with id of ' + id + ' does not exist';
    }

    res.jsonp({
        msg: msg
    });
});

