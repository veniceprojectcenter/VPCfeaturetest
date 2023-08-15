const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    signatureVersion: "v4"
});
const {randomUUID} = require('crypto'); //Crypto is part of Node.js runtime since v14.17


//this is the main function body for the serverless lambda function
exports.handler= async (event,context, callback) => {
    let body = JSON.parse(event.body);
    let key = randomUUID()
    let bucketName = process.env.bucket;
    let fileName = body.filename;
    fileName = fileName.replace(/\s+/g, '-').toLowerCase();
    // this gets an upload url
    const url = s3.getSignedUrl('putObject',{
        Bucket: bucketName,
        Key: fileName,
        Expires:300 // 5 min timer
    })
    const responseBody = {
        uploadUrl: url,
        getUrl: `https://${bucketName}.s3.amazonaws.com/${fileName}`,
    }
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": '*'
        },
        body: JSON.stringify(responseBody)
    }
}
