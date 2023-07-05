provider "aws" {
  region = var.aws_region
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
