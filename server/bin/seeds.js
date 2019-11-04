const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const mongoose = require('mongoose')
const App = require('../models/App')

require('../configs/database')

let generateJSON = () => {
  let appArray = []
  for (let i = 1; i <= 200; i++) {
    appArray.push({
      id: Number(i),
      name: `my-app-${i}`,
    })
  }
  return appArray
}
console.log(generateJSON(), '====')

App.deleteMany()
  .then(() => {
    return App.create(generateJSON())
  })
  .then(appCreated => {
    // console.log(`${appCreated.length} apps created with the following id:`)
    // console.log(appCreated.map(u => u._id))
    console.log('success!')
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err + 'error '
  })
