const mongoose = require('mongoose')

module.exports = () => {
 mongoose.connect("mongodb+srv://admin:Admin123@myapp.oux5y.mongodb.net/newapp?retryWrites=true&w=majority",{
 server: {
   socketOptions: {
     socketTimeoutMS: 0,
     connectionTimeout: 0
   }
 }

 });
}


