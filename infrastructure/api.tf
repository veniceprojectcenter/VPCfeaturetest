# aws api gateway stuff
resource "aws_api_gateway_rest_api" "vpc_file_api" {
  name = "vpc_file_api"
}

#this adds the /files route to our api
resource "aws_api_gateway_resource" "vpc_file_resource" {
  rest_api_id   = aws_api_gateway_rest_api.vpc_file_api.id
  parent_id     = aws_api_gateway_rest_api.vpc_file_api.root_resource_id
  path_part     = "files"
}

resource "aws_api_gateway_method" "files_get_method" {
  authorization = "NONE"
  http_method   = "POST"
  resource_id   = aws_api_gateway_resource.vpc_file_resource.id
  rest_api_id   = aws_api_gateway_rest_api.vpc_file_api.id
}

resource "aws_api_gateway_integration" "get_file_integration" {
  resource_id = aws_api_gateway_resource.vpc_file_resource.id
  rest_api_id = aws_api_gateway_rest_api.vpc_file_api.id
  http_method = aws_api_gateway_method.files_get_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri =  aws_lambda_function.writeFile.invoke_arn
}