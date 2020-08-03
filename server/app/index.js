const bodyParser = require('body-parser');
const express = require('express');
const apiRoutes = require('./routes');
const mongoose = require('mongoose');
const OAuth2Server = require('oauth2-server'),
    Request = OAuth2Server.Request,
    Response = OAuth2Server.Response;


// let model =  require('./model');
// model.loadExampleData();
// Makes connection asynchronously. Mongoose will queue up database
// operations and release them when the connection is complete.
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uristring = 'mongodb://localhost/oauth';
mongoose.connect(uristring, {
    useNewUrlParser: true,
    useCreateIndex: true,
 },
  function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});



app.oauth = new OAuth2Server({
	model: require('./model'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});

app.all('/oauth/token', obtainToken);

app.get('/', authenticateRequest, function(req, res) {

	res.send('Congratulations, you are in a secret area!');
});




//app.use(app.oauth.authorize());

// app.use(function(req, res) {
//   res.send('Secret area');
// });

// app.use('/api', apiRoutes);



// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log("Running server on port: "+ port);
})


function obtainToken(req, res) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.token(request, response)
		.then(function(token) {

			res.json(token);
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

function authenticateRequest(req, res, next) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.authenticate(request, response)
		.then(function(token) {

			next();
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}
