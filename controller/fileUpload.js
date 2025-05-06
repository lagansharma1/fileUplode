const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now() + "_" + `${file.name.split(".")[1]}`;
    

        file.mv(path, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "File upload failed",
                });
            }

            res.status(200).json({
                success: true,
                message: "Local File uploaded successfully",
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                    path: path,
                },
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
// IMG UPLODE 
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality) {
    const options = { folder };
    if (quality) {
        options.quality = quality; // Set the quality parameter if provided

    }
    options.resource_type = 'auto'; // Automatically detect the resource type (image, video, etc.)
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    return result;
   
}



exports.imgUpload = async (req, res) => {
    try{
        const {name,tags ,email}= req.body;     
        console.log(name,tags ,email);
        const file = req.files.imgFile;
        console.log(file)
        //validtae the file type
        const supportedTypes = ['jpeg', 'png', 'jpg ','webp'];
        const fileType = file.name.split('.')[1].toLowerCase();
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }
        //file size validation
        const response = await uploadFileToCloudinary(file, 'lagan');
        console.log("hi",response);
        const fileData =await File.create({
          name,tags,email,imageUrl: response.secure_url  
        });

        res.status(200).json({
            success:true,
            message: "File uploaded successfully",
            imageUrl: response.secure_url  
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

//VIDIO UPLOAD

exports.videoUpload = async (req,res) => {
    try{
        const {name,tags,email}= req.body;
        console.log(name,tags,email);
        const file = req.files.videoFile;
        console.log(file);
        const supportedTypes = ['mp4', 'mov'];
        const fileType = file.name.split('.')[1].toLowerCase();  
        console.log("fileType",fileType);
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }
        const response = await uploadFileToCloudinary(file, 'lagan');
        console.log("hi",response);
        const fileData =await File.create({
          name,tags,email,imageUrl: response.secure_url  
        });
        res.status(200).json({
            success:true,
            message: "File uploaded successfully",
            imageUrl: response.secure_url  
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

exports.imageReducerUpload = async(req,res) =>{
    try{
        const {name,tags,email}= req.body;
        console.log(name,tags,email);
        const file = req.files.imgFile;
        console.log(file);
        const supportedTypes = ['jpeg', 'png', 'jpg ','webp'];
        const fileType = file.name.split('.')[1].toLowerCase();  
        console.log("fileType",fileType);
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }
        const response = await uploadFileToCloudinary(file, 'lagan',90);
        console.log("hi",response);
        const fileData =await File.create({
          name,tags,email,imageUrl: response.secure_url  
        });
        res.status(200).json({
            success:true,
            message: "File uploaded successfully",
            imageUrl: response.secure_url  
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}