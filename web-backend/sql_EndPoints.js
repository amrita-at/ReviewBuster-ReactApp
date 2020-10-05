
const express = require('express')
const Router = express.Router(); 


var pgp = require('pg-promise')()
var db = pgp('postgres://postgres:epita123@localhost:5432/movie_users')

//get methof for users

Router.get('/users/:username', (req, res) => {

  var uname = req.params.username

  db.one('SELECT * from users where username = $1', uname)
    .then(function (data) {
      res.send(data)
    })
    .catch(function (error) {
      res.send('ERROR : User doesnt exist!')
    })

})

//posting for users

Router.post('/users/:username', (req, res) => {

  var uname = req.params.username
  profile_new = req.body;
  console.log(profile_new, uname);

  db.one('UPDATE users SET name=$2, gender=$4, street=$5, city=$6, postal=$7, country=$8 where username=$1',
    [uname, profile_new.name, profile_new.dob, profile_new.gender, profile_new.street, profile_new.city, profile_new.postal, profile_new.country])
    .then(function (data) {
      console.log(data)
    })
    .catch(function (error) {

      console.log(error)
      res.send('ERROR : User doesnt exist!')
    })

})

module.exports = Router;