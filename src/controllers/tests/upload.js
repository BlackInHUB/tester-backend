const {toCloude} = require('../../helpers');

const upload = async (req, res) => {
    const {path, fieldname, filename} = req.file;

    const {url: image} = await toCloude(path, fieldname, filename);

    res.status(200).json({image});
};

module.exports = upload;