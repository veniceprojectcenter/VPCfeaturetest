variable "aws_region" {
  description = "the region for aws resources"
  type = string
  default = "us-east-1"
}

variable "versel_token" {
  description = "versel api token"
}

variable "DATABASE_URL" {
  description = "database url"
}
data "aws_caller_identity" "current" {

}
