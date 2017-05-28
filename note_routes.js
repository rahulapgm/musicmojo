var request = require('request');

module.exports = function(app, db) {
	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
	});
	
	app.get('/getreq', (req, res) => {
    // You'll create your note here.		
    var glob = null;
    var dataString = '{"query":' +  '"*' +req.query.search+'", "token" : "c25813d9af28bf3b45d2e1a221", "country" : "IN"}';
    var headers = {
    	'Content-Type': 'application/json',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'Access-Control-Allow-Origin': '*'
    };
		
    var options = {
    	url: 'http://api.dirble.com/v2/search',
    	method: 'POST',
    	headers: headers,
    	body: dataString
    };
		
	 request(options, function(err, response, body) {
    	if (err) { glob == err }
    	glob = body;
			res.send(glob);
	 });
  });
	
  app.post('/notes', (req, res) => {
		
  });
  // Other route groups could go here, in the future
};
var outputJSON = "sachin";

