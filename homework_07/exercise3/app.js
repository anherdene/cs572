var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.route('/secret')
    .get((req, res) => {
        client.connect( (err) => {
            const collection = client.db("homework01").collection("data");
            // perform actions on the collection object
            const test = collection.findOne();
            console.log(test);
            res.json(test);
            client.close();
        });
    });

module.exports = app;
