const AWS = require('aws-sdk')
const s3 = new AWS.S3();


//this is the main function body for the serverless lambda function
exports.handler= async (event,context, callback) => {
    let params = {
        Bucket: process.env.bucket, /* required */
    };
    //this is just returning all of the buckets as a example
    s3.listObjectsV2(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    return "gameing"
}
