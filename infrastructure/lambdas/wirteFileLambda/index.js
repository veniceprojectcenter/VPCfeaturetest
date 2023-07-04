const AWS = require('aws-sdk')
const s3 = new AWS.S3();


//this is the main function body for the serverless lambda function
module.exports.uploadFn = async (event) => {

    //this is just returning all of the buckets as a example
    return await s3.listBuckets().promise();
}
