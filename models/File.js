const mongoose = require ('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

//post mi8ddleware
// fileSchema.post('save',async function(doc){
//     try {
//         // Ensure environment variables are loaded
//         if (!process.env.MAIL_HOST || !process.env.MAIL_PORT || !process.env.MAIL_USER || !process.env.MAIL_PASSWORD) {
//             throw new Error("Missing email configuration in environment variables.");
//         }

//         // Convert port to number if it's a string
//         const port = parseInt(process.env.MAIL_PORT, 10);

//         let transporter = nodemailer.createTransport({
//             host: process.env.MAIL_HOST,
//             port: port,
//             secure: port === 465, // true for 465, false for other ports
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASSWORD,
//             },
//         });

//         let info = await transporter.sendMail({
//             from: `"Uploader" <${process.env.MAIL_USER}>`,
//             to: doc.email,
//             subject: "File Upload",
//             text: `File ${doc.name} has been uploaded successfully`,
//             html: `<b>File ${doc.name} has been uploaded successfully</b>`,
//         });

//         console.log("Email sent: %s", info.messageId);
//     } catch (error) {
//         console.error("Error sending email:", error);
//     }
// })

const File = mongoose.model('File', fileSchema); 
module.exports = File;