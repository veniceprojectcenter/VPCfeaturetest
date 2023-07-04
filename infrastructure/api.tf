# aws api gateway stuff
resource "aws_apigatewayv2_api" "vpc_file_api" {
  name          = "vpc_file_api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "imgStage" {
  api_id = aws_apigatewayv2_api.vpc_file_api.id
  name   = "img"
}

