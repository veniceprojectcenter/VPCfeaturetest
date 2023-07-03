provider "aws" {
  region = var.aws_region
}

provider "vercel" {
  api_token = var.versel_token
}

resource "vercel_project" "vpc_project" {
  name = "venice-project-center"
  git_repository = {
    type="github"
    production_branch = "main"
    #change this latter to the vpc git account
    repo="nick-leslie/Venice-Project-Center-weboverhall"
  }
}