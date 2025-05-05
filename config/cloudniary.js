const cloudinary = require('cloudinary').v2

exports.cloundinaryConnect = () =>{
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
    }
    catch(err){
        console.log("Cloudinary connection failed", err.message);
        process.exit(1); // Exit process with failure
    }
    
}
