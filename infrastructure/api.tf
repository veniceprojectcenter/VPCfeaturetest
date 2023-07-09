# aws api gateway stuff
resource "aws_api_gateway_rest_api" "vpc_file_api" {
  name = "vpc_file_api"
}


#this adds the /files route to our api
resource "aws_api_gateway_resource" "vpc_file_resource" {
  rest_api_id   = aws_api_gateway_rest_api.vpc_file_api.id
  parent_id     = aws_api_gateway_rest_api.vpc_file_api.root_resource_id
  path_part     = "add"
}

resource "aws_api_gateway_method" "files_get_method" {
  authorization = "NONE"
  http_method   = "POST"
  resource_id   = aws_api_gateway_resource.vpc_file_resource.id
  rest_api_id   = aws_api_gateway_rest_api.vpc_file_api.id
}
resource "aws_api_gateway_method_response" "file_response_200" {
  rest_api_id   = aws_api_gateway_rest_api.vpc_file_api.id
  resource_id   = aws_api_gateway_resource.vpc_file_resource.id
  http_method   = aws_api_gateway_method.files_get_method.http_method
  status_code   = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin" = true
  }
  depends_on = ["aws_api_gateway_method.files_get_method"]
}

resource "aws_api_gateway_integration" "get_file_integration" {
  resource_id = aws_api_gateway_resource.vpc_file_resource.id
  rest_api_id = aws_api_gateway_rest_api.vpc_file_api.id
  http_method = aws_api_gateway_method.files_get_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri =  aws_lambda_function.writeFile.invoke_arn
}
resource "aws_api_gateway_integration_response" "vpc_file_response" {
  http_method = aws_api_gateway_method.files_get_method.http_method
  resource_id = aws_api_gateway_resource.vpc_file_resource.id
  rest_api_id = aws_api_gateway_rest_api.vpc_file_api.id
  status_code = 200
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS,POST,PUT'",
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
  depends_on = ["aws_api_gateway_method_response.file_response_200"]
}

resource "aws_api_gateway_deployment" "fileApiDeployment" {
  depends_on = [aws_api_gateway_integration.get_file_integration]

  rest_api_id = aws_api_gateway_rest_api.vpc_file_api.id
  stage_name  = "file"


  lifecycle {
    create_before_destroy = true
  }
}