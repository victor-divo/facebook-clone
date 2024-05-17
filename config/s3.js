const { aws } = require('./config')
const { S3Client, S3 } = require('@aws-sdk/client-s3')

const { key, secret, region } = aws

const s3Client = new S3Client({
  accessKeyId: key,
  secretAccessKey: secret,
  region,
})

const s3 = new S3({
  credentials: {
    accessKeyId: key,
    secretAccessKey: secret,
  },
  region,
})

module.exports = { s3, s3Client }
