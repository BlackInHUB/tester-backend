const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const toCloude = async (file, folder, filename) => {
    const cloudFilePath = folder + "/" + filename;

    const options = {
        public_id: cloudFilePath,
        overwrite: true,
    };

    try {
        const {url} = await cloudinary.uploader.upload(file, options);
        await fs.unlinkSync(file);

        return {
            message: 'Upload success',
            url
        }
    } catch (error) {
        fs.unlinkSync(file);
        return {
            message: 'Upload fail',
            error
        };
    }
};

module.exports = toCloude;