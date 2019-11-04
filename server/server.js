const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var formidable = require('formidable');
var fs = require('fs');
var rp = require('request-promise');

var nodemailer = require('nodemailer');

//var upload = multer({ dest: 'uploads/' })   //  upload to folder uploads

const nzu = require('./lib/nzu')
console.log(nzu.blue("nnamdi")) // outpts blue `nnamdi`
console.log(nzu.bold.yellow("chidume")) // outputs bold yellow `chidume`

console.log("\x1b[91m nnamdi - pok \x1b[39m");


const PORT = 3000;
const app = express();


// goto  https://myaccount.google.com/lesssecureapps   for open less secure
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
  });


app.use(bodyParser.json());

app.use(cors());


app.get('/',function(req,res){
    res.send('Hello from server');
})

app.get('/email',function(req,res){

      var mailOptions = {
        from: 'komsan.kr.18@gmail.com',
        to: 'pokphoenix@gmail.com',
        subject: 'Sending Email via Node.js',
        text: 'That was easy!'
      };
       
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send('Email sent: ' + info.response);
        }
      });


   
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({
        "message":"Data received"
    });
})





//app.post('/upload',bodyParser.raw({ limit : '1mb', type : '*/*'}),function(req,res){
app.post('/upload',function(req,res){
    var form = new formidable.IncomingForm();
    // document https://github.com/node-formidable/node-formidable
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;
    // form.maxFieldsSize = 20 * 1024 * 1024;
    form.maxFileSize = 5 * 1024 * 1024;
    // form.maxFields = 1000;
    var dir = getFolder();
    var resData = {
        status : 'success',
        filelists:fileList,
        message : ""
    }

    var fileList = [];
    // store all uploads in the /uploads directory
    form.uploadDir = dir;
    // parse the incoming request containing the form data
    form.parse(req);
    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        var newpath = form.uploadDir+"/" +Date.now()+"-"+file.name;
        fileList.push({ 'name': newpath.replace(__dirname,"")});
        fs.rename(file.path, newpath ,function(err){
            if (err) {
                throw err;
            }
        });
    });
    //log any errors that occur
    form.on('error', function(err) {
        resData.status = 'error' ;
        resData.message = err;
        res.send(resData);
    });
    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        resData.fileList = fileList;
        res.send(resData);
    });
})


app.post('/recaptcha',function(req,res){
    //res.send('Hello from server');
    console.log("recaptcha");
    const options = {
        method: 'POST',
        uri: 'https://www.google.com/recaptcha/api/siteverify',
        qs: {
          secret : req.body.secret ,
          response: req.body.response  
        },
        json: true
      };
      
      rp(options)
        .then(response => res.json(response))
        .catch(() => {});

    // res.send(post_req);
})


var todos = [];

app.get('/todo',function(req,res){
    res.send(todos);
})

app.post('/todo',function(req,res){
    data = req.body ;
    var todo = data;
    todo.id = todos.length+1 ;
    todos.push(todo);
    res.status(200).send(todo);
})

app.get('/todo/:id',function(req,res){
    var todo = {} ;
    var id = req.params.id;
    for(let i = 0 ; i<todos.length;i++){
        if(todos[i].id == id ){
           todo = todos[i];
        }
    }
    res.status(200).send(todo);
})

// update all data
app.put('/todo/:id',function(req,res){
    var id = req.params.id;
    var data = req.body;
    console.log("todo-put : "+id);
    var todo = {} ;
    for(let i = 0 ; i<todos.length;i++){
        if(todos[i].id == id ){
            todos[i] = data;
            todos[i].id= id ;
            todo = todos[i];
        }
    }
    res.status(200).send(todo);
})

// update some data
app.patch('/todo/:id',function(req,res){
    var id = req.params.id;
    var data = req.body;
    console.log("todo-patch : "+id);
    var todo = {} ;
    for(let i = 0 ; i<todos.length;i++){
        if(todos[i].id == id ){
            for (const key in data) {
                todos[i][key] = data[key];
            }
            todo = todos[i];
        }
    }
    res.status(200).send(todo);
})

app.delete('/todo/:id',function(req,res){
    var id = req.params.id;
    console.log("todo-delete : "+id);
    var todo = {};
    for(let i = 0 ; i<todos.length;i++){
        if(todos[i].id == id ){
            todo = todos[i] ;
            todos.splice(i,1);
        }
    }
    res.status(200).send(todo);
})



app.listen(PORT,function(){
    console.log("Server running on localhost:"+PORT)
})

function getFolder(){
    
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    // day = '' + d.getDate(),
    year = d.getFullYear();

    
    dir = __dirname+"/upload/"+year+"/"+month ;
    try {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir,{ recursive: true })
            console.log("create new dir"+dir);
        }
    } catch (err) {
        console.error(err)
    }
    return dir ;
}