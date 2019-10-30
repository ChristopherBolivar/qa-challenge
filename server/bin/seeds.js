const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const mongoose = require('mongoose')
const App = require('../models/App')

const bcryptSalt = 10

require('../configs/database')

let appArray = []
for (let i = 1; i <= 100; i++) {
  appArray.push({
    id: Number(i),
    name: `my-app-${i}`,
  })
}

App.deleteMany()
  .then(() => {
    return App.create(appArray)
  })
  .then(appCreated => {
    console.log(`${appCreated.length} apps created with the following id:`)
    console.log(appCreated.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
