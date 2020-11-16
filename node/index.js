var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path =require('path');
var multer = require('multer');
var Item_routes = require('./routes/item-routes');
var user_routes = require('./routes/user-routes');

var app= express();

mongoose.connect('mongodb://localhost:27017/olxapp', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',function(){
    console.log("mongoDb connected")
});

mongoose.connection.on('error',function(err){
    if(err)
    console.log("error Connection",err)
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.use(cors());

app.use(express.static('./uploads'));


app.use('/item',Item_routes);
app.use('/user',user_routes);

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    const filePath = req.file.path; 
    console.log(filePath);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })

app.listen(3000,function(){
    console.log("listening at 3000")
});