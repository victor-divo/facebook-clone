const multer = require('multer')
const multerS3 = require('multer-s3')
const { aws } = require('../config/config')
const { s3Client } = require('../config/s3')

const multipart = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: aws.bucketName,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: function(req, file, cb) {
      const isImage = file.mimetype.startsWith('image/');
      const disposition = isImage ? 'attachment' : 'inline';
      cb(null, disposition);
    },
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
})
  
module.exports = multipart;
