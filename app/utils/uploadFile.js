const {ref , getDownloadURL, uploadBytesResumable } = require ("firebase/storage") ;
const  {storage} = require ("../../config/firebase");
const  sharp = require("sharp");


const uploadFile = async (file) => {
    
    let fileBuffer =  await sharp(file.buffer).resize({width: 200, height: 200, fit: 'cover'}).toBuffer();

    const fileRef = ref(storage, `files/${file.originalname} ${Date.now()}`);

    const fileMetadata = {
        contentType: file.mimetype
    };

    const fileUploadPromise = uploadBytesResumable(fileRef, fileBuffer, fileMetadata);
    
    await fileUploadPromise;

    const fileDowloadURL = await getDownloadURL(fileRef);

    return {ref: fileRef, downloadURL: fileDowloadURL}
}       

module.exports = {uploadFile}

    

