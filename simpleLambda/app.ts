import { LambdaEdgeEventType } from "aws-cdk-lib/aws-cloudfront";

exports.handler = async (event: LambdaEdgeEventType) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
    },
    body: "OK",
  };
};
