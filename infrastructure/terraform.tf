terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
    planetscale = {
      source  = "koslib/planetscale"
      version = "0.5.2"
    }
  }
}

