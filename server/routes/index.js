const express = require('express')
const App = require('../models/App')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log(req.query, '=-=-=-=-=--=-=')
  let start = Number(req.query.start)
  let end = Number(req.query.end)
  console.log(start, end, '+_+_+_+_+_+_+')
  App.find()
    .sort({ id: 1 - 1 })
    .skip(start)
    .limit(end)
    .then(app => {
      res.json(app)
    })
    .catch(err => next(err))
})

module.exports = router
