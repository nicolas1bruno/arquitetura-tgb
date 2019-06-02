// app.js

const express = require('express');
const bodyParser = require('body-parser');

const informationLog = require('./routes/informationLog.route'); // Imports routes for the informationLog
const machine = require('./routes/machine.route'); // Imports routes for the informationLog
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://ska:6SdU2JkWuAmZrtP@ds151076.mlab.com:51076/ska';
let dev_db_url = 'mongodb://localhost:27017/ska';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}

app.use(allowCrossDomain);

app.use('/informations', informationLog);
app.use('/machines', machine);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});