   const mongoose = require('mongoose');                    

   async function connectDB() {
    
    await mongoose.connect("mongodb+srv://ajeet:ltCnL2TJA5P8L60I@complete-backend-node.f9bzyc3.mongodb.net/halley")
   
console.log("Database connected successfully"); 

}


module.exports =  connectDB ;