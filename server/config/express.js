var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,cors = require('cors')
    ,routes = require('../app/routes')
    ,path =  require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client/src'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

routes(app);

module.exports = app;