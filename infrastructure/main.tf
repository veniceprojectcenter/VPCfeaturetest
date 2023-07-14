provider "aws" {
  region = var.aws_region
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
}

provider "vercel" {
  api_token = var.versel_token
}
#vercel projects
resource "vercel_project" "vpc_project" {
  name = "venice-project-center"
  framework = "nextjs"
  git_repository = {
    type="github"
    production_branch = "main"
    #change this latter to the vpc git account
    repo="nick-leslie/Venice-Project-Center-weboverhall"
  }
}
resource "vercel_project_environment_variable" "db_env"  {
  project_id = vercel_project.vpc_project.id
  target = ["production","preview","development"]
  key="DATABASE_URL"
  value=var.DATABASE_URL
}

resource "vercel_project_environment_variable" "file_url_env"  {
  project_id = vercel_project.vpc_project.id
  target = ["production","preview","development"]
  key="FILE_API_URL"
  value= "https://${aws_api_gateway_rest_api.vpc_file_api.id}.execute-api.${var.aws_region}.amazonaws.com"
}
resource "vercel_project_environment_variable" "jwt_secret"  {
  project_id = vercel_project.vpc_project.id
  target = ["production","preview","development"]
  key="JWT_SECRET"
  value= var.JWT_SECRET
}

resource "vercel_project_environment_variable" "fileUploadUrl" {
  project_id = vercel_project.vpc_project.id
  key        = "NEXT_PUBLIC_FILE_API_URL"
  value      = aws_api_gateway_deployment.fileApiDeployment.invoke_url
  target = ["production","preview","development"]
}

resource "vercel_project" "bridge_app" {
  name = "bridge-app"
  git_repository = {
    type ="github"
    production_branch = "main"
    repo="nick-leslie/bridges-application-test"
  }
}
#resource "vercel_project" "canals-app" {
#  name = "canals-app"
#  git_repository = {
#    type = "github"
#    production_branch = "main"
#    repo = "veniceprojectcenter/vpc-canalsapp.git"
#  }
#}