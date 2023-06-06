/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { exec } = require('child_process');
const mime = require('mime-types');
const recursive = require('recursive-readdir');
const path = require('path');
const { uploadToS3Utils } = require('../../scripts/upload-to-s3');

const uploadDir = () =>
  new Promise(resolve => {
    const filesWithParams = [];
    const currentPath = path.resolve(__dirname, 'build');
    recursive(currentPath, (err, files) => {
      files.forEach(async file => {
        const params = { encoding: undefined };
        if (file.toString() === `${currentPath}/index.html`) {
          // Special handling for index.html
          params.key = file.replace(`${currentPath}/index.html`, 'spaceweb');
          filesWithParams.push({ file, params: { ...params } });
          // also create one with '/' in the end of path
          const alternativeParamsKey = params.key + '/';
          filesWithParams.push({ file, params: { ...params, key: alternativeParamsKey } });
          // also include the original html file
          const originalHtmlParamsKey = file.replace(`${currentPath}/`, 'spaceweb/');
          filesWithParams.push({ file, params: { ...params, key: originalHtmlParamsKey } });
        } else {
          // Replace absolute path
          const isHtml = mime.lookup(file) === 'text/html';
          params.key = file.replace(`${currentPath}/`, 'spaceweb/').replace('.html', isHtml ? '' : '.html');
          filesWithParams.push({ file, params });
          // also create one with '/' in the end of path for html files
          if (isHtml) {
            const alternativeParamsKey = params.key + '/';
            filesWithParams.push({ file, params: { ...params, key: alternativeParamsKey } });
            // also include the original html file
            const originalHtmlParamsKey = file.replace(`${currentPath}/`, 'spaceweb/');
            filesWithParams.push({ file, params: { ...params, key: originalHtmlParamsKey } });
          }
        }
        console.log('fileName: ', params.key);
      });

      uploadToS3Utils(filesWithParams).then(
        () => {
          console.log('==> ✅  All static assets uploaded to S3');
          console.timeEnd('Total time taken for uploading all files');
          resolve('');
        },
        error => {
          throw error;
        }
      );
    });
  });

uploadDir();
