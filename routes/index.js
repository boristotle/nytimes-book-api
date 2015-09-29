var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var nyAPI = process.env.nyAPI;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/books', function(req, res) {
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + nyAPI)
      .end(function (response) {
        console.log(response.body.results.books);
        // var books = response.body.results.books;
        // for (var i = 0; i < books.length; i++) {
        //   var author = books[i].author;
        //   var title = books[i].title;
        //   console.log(author, title);
        // }
        
        res.render('index', {books: response.body.results.books});
      })
})



module.exports = router;
