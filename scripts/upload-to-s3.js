/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const mime = require('mime-types');
const AWS = require('aws-sdk');

const getAWSS3Client = () =>
  new AWS.S3({
    region: 'ap-south-1',
  });

const uploadFile = (client, file, { key, encoding }) =>
  new Promise((resolve, reject) => {
    const expiresDate = new Date();

    expiresDate.setSeconds(expiresDate.getSeconds() + 3600);
    const uploadParams = {
      Bucket: 'frontend-tooling',
      CacheControl: 'max-age=3600, no-transform, public',
      ContentEncoding: encoding,
      ContentType: mime.lookup(file) || 'application/octet-stream',
      Expires: expiresDate,
      Key: key,
      Body: fs.createReadStream(file),
      TimingAllowOrigin: '*',
    };

    console.time(`Uploading - ${file}`);
    client.upload(uploadParams, err => {
      if (err) {
        reject(err);
      } else {
        console.timeEnd(`Uploading - ${file}`);
        resolve('');
      }
    });
  });

const uploadDir = (client, filesWithParams) =>
  new Promise(resolve => {
    const promises = [];
    console.time('Total time taken for uploading all files');
    filesWithParams.forEach(async ({ file, params }) => {
      // console.log('fileName: ', params.key);
      promises.push(uploadFile(client, file, params));
    });
    console.log("Will upload " + promises.length + "files");
    Promise.all(promises).then(
      () => {
        console.log("upload " + promises.length + "files finished");
        console.log('==> ✅  All static assets uploaded to S3');
        console.timeEnd('Total time taken for uploading all files');
        resolve('');
      },
      error => {
        throw error;
      }
    );
  });
const uploadToS3Utils = filesWithParams => uploadDir(getAWSS3Client(), filesWithParams);
module.exports = { uploadToS3Utils };
