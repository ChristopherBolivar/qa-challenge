const express = require('express')
const App = require('../models/App')
const router = express.Router()

router.get('/', (req, res, next) => {
  App.find()
    .then(app => {
      res.json(app)
    })
    .catch(err => next(err))
})

module.exports = router
