# aws api gateway stuff
resource "aws_apigatewayv2_api" "vpc_file_api" {
  name          = "vpc_file_api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "imgStage" {
  api_id = aws_apigatewayv2_api.vpc_file_api.id
  name   = "img"

}

resource "aws_apigatewayv2_integration" "invokeLambda" {
  api_id           = aws_apigatewayv2_api.vpc_file_api.id
  integration_type = "AWS_PROXY"
  integration_uri = aws_lambda_function.writeFile.invoke_arn
}

resource "aws_apigatewayv2_route" "addImage" {
  api_id    = aws_apigatewayv2_api.vpc_file_api.id
  route_key = "POST /imgs"
  target = "integrations/${aws_apigatewayv2_integration.invokeLambda.id}"
}