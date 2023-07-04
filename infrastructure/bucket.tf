resource "aws_s3_bucket" "vpcBucket" {
  bucket = "venice-project-center-file-bucket"
}

#resource "aws_iam_policy" "UploadAndDownload" {
#  name = "vpc s3 uploadand download"
#  policy = jsondecode({
#    Version = "7/4/23"
#    Statement = [
#      {
#
#      }
#    ]
#  })
#}