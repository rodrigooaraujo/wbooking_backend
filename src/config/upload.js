const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //will resolve the / or 

        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.fieldname, ext)
            callback(null, `${name}-${Date.now()}${ext}`);
        }
    }),
}