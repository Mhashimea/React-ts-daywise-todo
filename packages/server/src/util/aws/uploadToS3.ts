import * as aws from 'aws-sdk';
import fs from 'fs';

export default async function UploadToS3(file) {
  const bucketName = process.env.BUCKETNAME
  const accessKeyId = process.env.S3ACCESSKEY
  const secretAccessKey = process.env.S3SECRETACCESSKEY

  const s3 = new aws.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  })

  const readFile = fs.readFileSync('public/uploads/' + file.filename)

  const params: any = {
    Bucket: bucketName,
    key: Date.now() + file.originalname,
    Body: readFile
  }

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}