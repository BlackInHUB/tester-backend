const multer = require('multer');
const {v4: uuid} = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './temp');
    },
    filename: function(req, file, cb) {
        const [name, extension] = file.originalname.split('.');

        cb(null, uuid() + '-' + name);
    }
});

const upload = multer({storage});

module.exports = upload;