resource "aws_lambda_function" "writeFile" {
  function_name = "write_file_to_bucket"
  runtime = "nodejs16.x"
  handler = "index.handler"
  role          = aws_iam_role.lambda_execution_role.arn
  filename = data.archive_file.writeFileZip.output_path
  source_code_hash = filebase64sha256(data.archive_file.writeFileZip.output_path)
  environment {
    variables = {
      bucket = aws_s3_bucket.vpcFileBucket.bucket
    }
  }
}

data "archive_file" "writeFileZip" {
  type = "zip"
  source_dir = "lambdas/wirteFileLambda"
  output_path = "bin/writeFileLambda.zip"
}


resource "aws_iam_role" "lambda_execution_role" {
  name = "vpclambdaExecutionroll"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "sts:AssumeRole",
    "Principal": {
      "Service": "lambda.amazonaws.com"
    }
  }]
}
EOF
}

resource "aws_iam_policy" "lambda_policy" {
  name = "lambda_s3_policy"
  description = "IAM policy for Lambda to access S3"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:ListBucket",
        "s3:GetObject"
      ],
      "Resource": "${aws_s3_bucket.vpcFileBucket.arn}/*"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "handler_lambda_policy" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}