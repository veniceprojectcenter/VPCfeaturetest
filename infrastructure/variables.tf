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

variable "JWT_SECRET" {
  description = "json web token sighning key"
}
data "aws_caller_identity" "current" {

}
