const AWS = require('aws-sdk')
const s3 = new AWS.S3();


//this is the main function body for the serverless lambda function
exports.handler= async (event,context, callback) => {
    console.log(JSON.parse(event.body));
    let body = JSON.parse(event.body);
    // this gets an upload url
    const url = s3.getSignedUrl('putObject',{
        Bucket: process.env.bucket,
        Key: body.filename,
        Expires:300 // 5 min timer
    })
    const responseBody = {
        uploadUrl: url,
        fileKey: body.filename
    }
    return {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    }
}
