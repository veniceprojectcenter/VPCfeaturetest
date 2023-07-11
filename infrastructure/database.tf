provider "planetscale" {
  service_token_id = var.PLANETSCALE_TOKEN_ID
  service_token    = var.PLANETSCALE_TOKEN
}


resource "planetscale_database" "vpcDb" {
  name         = "venice_project_center"
  organization = var.PLANETSCALE_ORG
  region = "eu-central"
}
