
  const mongoose = require('mongoose')

// Create a new MongoClient
module.exports = () => {
// Connection URI

const uri =
"mongodb+srv://admin:Admin123@myapp.oux5y.mongodb.net/newapp?retryWrites=true&w=majority"

async function run() {

    // Connect the client to the server
  await   mongoose.connect(uri).then(async() => {
    
        await console.log("Connected successfully to server");
     
      
    }).catch((err) => {
      console("MongoDB Connection Failed: "+err)
    }) 
    
    // Establish and verify connection
    

    // if error 
    
  
  }
  run().catch(console.dir);
}


