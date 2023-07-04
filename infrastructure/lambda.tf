resource "aws_lambda_function" "writeFile" {
  function_name = ""
  role          = aws_iam_role.lambda_role.arn
  environment {
    variables = {
      bucket = aws_s3_bucket.vpcBucket.bucket
    }
  }
}

data "archive_file" "writeFileZip" {
  type = "zip"
  output_path = ""
}


resource "aws_iam_role" "lambda_role" {
  name = "vpc-lambdaroll"

  assume_role_policy = <<EOF
{
  "Version": "2023-4-7",
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
  name        = "lambda-s3-policy"
  description = "IAM policy for Lambda to access S3"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject"
      ],
      "Resource": "${aws_s3_bucket.vpcBucket.arn}/*"
    },
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "handler_lambda_policy" {
  role       = aws_iam_role.lambda_role.arn
  policy_arn = aws_iam_policy.lambda_policy.arn
}