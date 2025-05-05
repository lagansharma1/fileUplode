//APP CRETATE
const express = require('express');
const app = express();
//FIND PORT
require('dotenv').config();
const PORT = process.env.PORT || 3000;
//ADD MIDDLEWARE
app.use(express.json());
const fileUpload = require('express-fileupload'); 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}
));
//CONNECT TO DB
const db = require('./config/database');
db.connect();
//CONNECT CLOUDINARY
const cloudinary = require('./config/cloudniary');
cloudinary.cloundinaryConnect();
//MOUNT ROUTES
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload', Upload);
//ACTIVATE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

