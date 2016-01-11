var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var searchText = req.body.searchText;
  var searchType = req.body.searchType;

  if(searchType == 'website'){
  	Website.searchWebsites(searchText, function(err, websites){
  		if(err){
  			res.send(err);
  		}
  		var model = {
  			websites: websites.results
  		}

  		res.render('website_results',model);
  	});
  } else if(searchType == 'news'){

  } else {
  	res.send('Choose website or news');
  }
});

module.exports = router;