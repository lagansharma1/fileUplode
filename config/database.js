const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{

    })
    .then(()=> console.log ("Database connected successfully"))
    .catch((err)=>{
        console.log("Database connection failed", err.message);
        process.exit(1); // Exit process with failure
    })
}