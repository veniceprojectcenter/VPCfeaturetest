resource "aws_s3_bucket" "vpcFileBucket" {
  bucket = "venice-project-center-bucket"
}
//TODO replace the allowed origns with our domain name
resource "aws_s3_bucket_cors_configuration" "vpc_s3_cors" {
  bucket = aws_s3_bucket.vpcFileBucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST","GET"]
    allowed_origins = ["*"]
    max_age_seconds = 60000
  }
}
resource "aws_s3_bucket_public_access_block" "vpc_s3_public_access" {
  bucket = aws_s3_bucket.vpcFileBucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.vpcFileBucket.id
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "s3:GetObject"
        ],
        "Resource": [
            "${aws_s3_bucket.vpcFileBucket.arn}",
            "${aws_s3_bucket.vpcFileBucket.arn}/*"
            ],
        "Principal": "*"
      }
    ]
  }
  EOF
}


