const { s3Client } = require('../config/s3')
const { aws } = require('../config/config')
const multer = require('multer')

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: aws.bucketName,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
})

module.exports = upload
