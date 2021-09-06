const mongoose = require('mongoose')

module.exports = () => {
const uri =
"mongodb+srv://admin:Admin123@myapp.oux5y.mongodb.net/newapp?retryWrites=true&w=majority"
async function run() {
  await   mongoose.connect(uri)
  }
  run()
}


