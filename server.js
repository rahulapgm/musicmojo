const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

// server.js
const port = 8100;
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

require('./note_routes')(app, {});
require('./index')(app, {});
app.listen(server_ip_address,server_port, () => {
  console.log('We are live on ' + server_port);
});
