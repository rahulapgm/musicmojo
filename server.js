const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

// server.js
const port = 8100;
require('./note_routes')(app, {});
require('./index')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});