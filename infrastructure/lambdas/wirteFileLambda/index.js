const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    signatureVersion: "v4"
});
const {randomUUID} = require('crypto'); //Crypto is part of Node.js runtime since v14.17


//this is the main function body for the serverless lambda function
exports.handler= async (event,context, callback) => {
    console.log(JSON.parse(event.body));
    let body = JSON.parse(event.body);
    let key = randomUUID()
    // this gets an upload url
    const url = s3.getSignedUrl('putObject',{
        Bucket: process.env.bucket,
        Key: key,
        Expires:300 // 5 min timer
    })
    const responseBody = {
        uploadUrl: url,
        fileKey: key,
        ContentType: ""
    }
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": '*'
        },
        body: JSON.stringify(responseBody)
    }
}
