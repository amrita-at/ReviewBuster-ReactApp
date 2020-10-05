
const express = require('express')
const Router = express.Router();


var MongoClient = require('mongodb').MongoClient

var mongoUrl = "mongodb://localhost:27017/movie_buster"

console.log(Router)

var multimediaCollection = ''
var reviewCollection  = ''

MongoClient.connect(mongoUrl, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('config');
    multimediaCollection = db.collection('Movie_Multimedia');
    reviewCollection = db.collection('movie_reviews');
    //Router.locals.multimediaCollection = multimediaCollection;
    //Router.locals.reviewCollection = reviewCollection;

  }).catch(error => console.error(error));

//get method to get all the movie details

Router.get('/movies/', (req, res) => {
  multimediaCollection.find({}).toArray(function (err, result) {
    if (err) throw err
    res.send(result)
  });
})

Router.get('/movies/:movieName', (req, res) => {
  var Mname = req.params.movieName
  multimediaCollection.find({name: Mname}).toArray(function (err, result) {
    if (err) throw err
    res.send(result)
    console.log(result)
  });
})

//post for accessing movies

Router.post('/movies/:movieName', (req, res) => {
  var Mname = req.params.movieName
  movie_new = req.body;
  multimediaCollection.insertOne( movie_new , function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(movie_new)
  });
})

// get method for movie reviews

Router.get('/moviereviews/:moviename', (req, res) => {
  var mname = req.params.moviename
  reviewCollection.find({ movie: mname }).toArray(function (err, result) {
    if (err) throw err
    res.send(result)
  });
})

//posting for movie reviews

Router.post('/moviereviews/:moviename', (req, res) => {
  var mname = req.params.moviename
  review_new = req.body;
  reviewCollection.insertOne( review_new , function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(review_new);
  });
})

module.exports = Router;