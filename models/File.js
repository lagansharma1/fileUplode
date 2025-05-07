const mongoose = require ('mongoose');
const nodemailer = require('nodemailer');

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
//     try{
//         console.log("document",doc);
//         let transporter = nodemailer.createTransport({
//             host: process.env.MAIL_HOST,
//             auth:{
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASSWORD,
//             }


//         });
//         let info = await transporter.sendMail({
//             from: process.env.MAIL_FROM,
//             to: doc.email,
//             subject: "File Upload",
//             text: `File ${doc.name} has been uploaded successfully`,
//             html: `<b>File ${doc.name} has been uploaded successfully</b>`
//         });
//     }
//     catch(err){
//         console.log(err);
//     }
// })

const File = mongoose.model('File', fileSchema); 
module.exports = File;