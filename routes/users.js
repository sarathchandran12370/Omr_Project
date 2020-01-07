var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// Login
router.get('/login', (req, res, next) => {
  res.render('users/login', { login: true })
})

// Signup
router.get('/signup', (req, res, next) => {
  res.render('users/signup', { login: true })
})

// counter
router.get('/counter', (req, res, next) => {
  res.render('users/counter', { login: true })
})

module.exports = router
