
var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});

app.get('/', function(req, res) {
	res.render('home', {
    pageTestScript: '/qa/tests-home.js'
  });
});

app.get('/login', function(req, res) {
	res.render('login', {
    pageTestScript: '/qa/tests-login.js'
  });
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + 
			app.get('port') + '; press Ctrl-C to terminate.' );
});

