var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  Category.getCategories(function(err, categories){
  	res.render('add_website',{
  		categories: categories
  	});
  });
});

router.post('/add', function(req, res, next) {
	var website = new Website();
	website.title = req.body.title;
	website.url = req.body.url;
	website.description = req.body.description;

  Website.addWebsite(website, function(err, website){
  	if(err){
  		res.send(err);
  	}
  	res.redirect('/');
  });
});

module.exports = router;